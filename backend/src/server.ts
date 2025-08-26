import "reflect-metadata"
import fastify from "fastify"
import mercurius from "mercurius"
import { buildSchema } from "type-graphql"
import { TodoCustomResolver } from "./graphql/todo"
import { connectDb } from "./db/prismaClient"
import fastifyCors from "@fastify/cors"
import { UserCustomResolver } from "./graphql/UserCustomResolver"
import { PrismaClient } from "../src/generated/prisma"
import { AuthService } from "./services/authService"
import { UserService } from "./services/userService"

const prisma = new PrismaClient()
const authService = new AuthService()
const userService = new UserService({ prisma, authService })

const app = fastify({
  logger: true,
})

app.get("/", async (request, reply) => {
  reply.send({ message: "hello world" })
})

const start = async () => {
  // connect Prisma to Mongodb
  await connectDb()

  await app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
  })

  // Build GraphQL schema from TypeGraphQL resolvers
  const schema = await buildSchema({
    resolvers: [TodoCustomResolver, UserCustomResolver],
    emitSchemaFile: true,
  })

  app.register(mercurius, {
    schema,
    graphiql: true,
    context: () => ({
      userService,
      authService,
    }),
  })

  try {
    await app.listen({ port: 3000 })
    app.log.info(`server listening on port 3000...`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
