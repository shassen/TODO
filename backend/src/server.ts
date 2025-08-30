// src/server.ts
import "reflect-metadata"
import "dotenv/config"
import fastify from "fastify"
import mercurius from "mercurius"
import { buildSchema } from "type-graphql"
import fastifyCors from "@fastify/cors"
import { PrismaClient } from "../src/generated/prisma"
import { AuthService } from "./services/authService"
import { UserService } from "./services/userService"
import { TodoCustomResolver } from "./graphql/todo"
import { UserCustomResolver } from "./graphql/UserCustomResolver"
import { connectDb } from "./db/prismaClient"
import { createContext } from "./context/context"
import authPlugin from "./plugins/auth"

// Instantiate Prisma and services
const prisma = new PrismaClient()
const authService = new AuthService()
const userService = new UserService({ prisma, authService })

// Create Fastify app
const app = fastify({ logger: true })

// Test route
app.get("/", async (request, reply) => {
  reply.send({ message: "hello world" })
})

// Attach services to app for plugins to access
app.decorate("userService", userService)

const start = async () => {
  await connectDb()

  if (!process.env.JWT_SECRET) {
    console.log("⚠️  JWT_SECRET missing in .env")
  } else {
    console.log("✅ JWT_SECRET loaded")
  }

  await app.register(fastifyCors, {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })

  // Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [TodoCustomResolver, UserCustomResolver],
    emitSchemaFile: true,
  })

  // Create context function for Mercurius
  const graphqlContext = createContext(userService, authService)

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
    app.log.info(`Server listening on port 3000...`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
