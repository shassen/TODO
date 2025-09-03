// src/server.ts
import "reflect-metadata"
import "dotenv/config"
import { v4 as uuidv4 } from "uuid"
import fastify, { FastifyBaseLogger } from "fastify"
import mercurius from "mercurius"
import { buildSchema } from "type-graphql"
import fastifyCors from "@fastify/cors"
import { AuthService } from "./services/authService"
import { UserService } from "./services/userService"
import { TodoService } from "./services/todoService"
import { CollectionService } from "./services/collectionService"
import { TodoCustomResolver } from "./graphql/TodoCustomResolver"
import { UserCustomResolver } from "./graphql/UserCustomResolver"
import { CollectionCustomResolver } from "./graphql/CollectionCustomResolver"
import { connectDb } from "./db/prismaClient"
import { createContext } from "./context/context"
import authPlugin from "./plugins/auth"
import { prisma } from "./db/prismaClient"

// Create Fastify app
const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
      level: process.env.LOG_LEVEL || "info",
    },
  },
  disableRequestLogging: true,
})

// logger for the entire application
const logger = app.log

// Instantiate Prisma and services
const authService = new AuthService({ logger })
const userService = new UserService({ prisma, authService, logger })
const todoService = new TodoService({ prisma, logger })
const collectionService = new CollectionService({ prisma, logger })

logger.info("⚙️ Services instantiated")

app.addHook("onRequest", (request, reply, done) => {
  const uniqueReqId = uuidv4()
  request.id = uniqueReqId
  request.log = request.log.child({ reqId: request.id })
  request.log.info(
    {
      method: request.method,
      url: request.url,
    },
    "Incoming request",
  )
  done()
})

app.addHook("onResponse", (request, reply, done) => {
  reply.log = reply.log.child({ reqId: request.id })
  reply.log.info(
    {
      statusCode: reply.statusCode,
      responseTime: reply.elapsedTime,
    },
    "Request completed",
  )
  done()
})

// Test route
app.get("/", async (request, reply) => {
  reply.send({ message: "hello world", reqId: request.id })
})

// Attach services to app for plugins to access
app.decorate("userService", userService)

const start = async () => {
  logger.info("🏁 Starting server")
  await connectDb(logger)

  if (!process.env.JWT_SECRET) {
    logger.warn("⚠️  JWT_SECRET missing in .env")
  } else {
    logger.info("🔑 JWT_SECRET loaded")
  }

  await app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization", "Content-Type", "x-request-id"],
  })

  // Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [TodoCustomResolver, UserCustomResolver, CollectionCustomResolver],
    emitSchemaFile: true,
  })

  // Create context function for Mercurius
  const graphqlContext = createContext(
    userService,
    authService,
    todoService,
    collectionService,
    logger,
  )

  // Register GraphQL with Mercurius
  app.register(mercurius, {
    schema,
    graphiql: {
      enabled: true,
    },
    context: graphqlContext, // pass context function
  })

  // Register auth plugin
  app.register(authPlugin)

  try {
    await app.listen({ port: 3000 })
    logger.info(`Server listening on port 3000...`)
  } catch (err) {
    logger.error({ err }, "Error starting server")
    process.exit(1)
  }
}

start()
