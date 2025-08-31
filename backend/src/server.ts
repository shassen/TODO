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
import { TodoCustomResolver } from "./graphql/TodoCustomResolver"
import { UserCustomResolver } from "./graphql/UserCustomResolver"
import { connectDb } from "./db/prismaClient"
import { createContext } from "./context/context"
import authPlugin from "./plugins/auth"
import { prisma } from "./db/prismaClient"

// generate uuidv4 request id for logging and maintaining the same request id for the entire lifecycle of the requests
const reqId = uuidv4()

// Create Fastify app
const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
      level: process.env.LOG_LEVEL,
    },
  },
})

// logger for the entire application
const logger = app.log

// Instantiate Prisma and services
const authService = new AuthService()
const userService = new UserService({ prisma, authService })
const todoService = new TodoService({ prisma, logger })

app.addHook("onRequest", (request, reply, done) => {
  request.id = reqId
  reply.log = reply.log.child({ reqId: request.id })
  done()
})

// Test route
app.get("/", async (request, reply) => {
  request.id = reqId
  reply.send({ message: "hello world" })
})

// Attach services to app for plugins to access
app.decorate("userService", userService)

const start = async () => {
  logger.info({ reqId }, "Starting server")
  await connectDb(logger)

  if (!process.env.JWT_SECRET) {
    logger.warn("⚠️  JWT_SECRET missing in .env")
  } else {
    logger.info("✅ JWT_SECRET loaded")
  }

  await app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization", "Content-Type", "x-request-id"],
  })

  // Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [TodoCustomResolver, UserCustomResolver],
    emitSchemaFile: true,
  })

  // Create context function for Mercurius
  const graphqlContext = createContext(userService, authService, todoService, logger)

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
    logger.info({ reqId }, `Server listening on port 3000...`)
  } catch (err) {
    logger.error({ reqId, err }, "Error starting server")
    process.exit(1)
  }
}

start()
