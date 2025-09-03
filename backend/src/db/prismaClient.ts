import { FastifyBaseLogger } from "fastify"
import { PrismaClient } from "../generated/prisma"

export const prisma = new PrismaClient()

export const connectDb = async (logger: FastifyBaseLogger) => {
  try {
    await prisma.$connect()
    logger.info("💽 Connected to Prisma established")
  } catch (err) {
    logger.error({ err }, "❌ Prisma connection error")
    process.exit(1)
  }
}
