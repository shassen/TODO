import { PrismaClient } from "../generated/prisma"
import { FastifyBaseLogger } from "fastify"
import { UserId } from "./todoService"
import { CreateCollectionInput } from "../graphql/CollectionCustomResolver"

export type CollectionServiceProps = {
  prisma: PrismaClient
  logger: FastifyBaseLogger
}

export class CollectionService {
  private prisma: PrismaClient
  private logger: FastifyBaseLogger

  constructor({ prisma, logger }: CollectionServiceProps) {
    this.prisma = prisma
    this.logger = logger
  }

  async getManyCollections({ userId }: UserId, reqId: string) {
    this.logger.info({ reqId, userId }, "Getting many collections")
    return await this.prisma.collection.findMany({
      where: {
        ownerId: userId,
      },
    })
  }

  async createCollection(
    { name, description, userId }: UserId & CreateCollectionInput,
    reqId: string,
  ) {
    this.logger.info({ reqId, userId }, "Creating collection")
    const collection = await this.prisma.collection.create({
      data: {
        name,
        description: description || undefined,
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    })
    return collection
  }
}
