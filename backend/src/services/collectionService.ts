import { PrismaClient } from "../generated/prisma"
import { FastifyBaseLogger } from "fastify"
import { UserId } from "./todoService"
import {
  CreateCollectionInput,
  DeleteCollectionInput,
  GetCollaboratorsInput,
} from "../graphql/CollectionCustomResolver"

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
        isDeleted: false,
        isActive: true,
      },
      // include: {
      //   todos: true,
      //   collaborators: true,
      // },
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

  async deleteCollection({ id, userId }: UserId & DeleteCollectionInput, reqId: string) {
    this.logger.info({ reqId, userId }, "Deleting collection")
    return await this.prisma.collection.update({
      where: {
        id,
        ownerId: userId,
      },
      data: {
        isDeleted: true,
      },
    })
  }

  async getCollaborators({ id, userId }: UserId & GetCollaboratorsInput, reqId: string) {
    this.logger.info({ reqId, userId }, "Getting collaborators")
    return await this.prisma.collectionCollaborator.findMany({
      where: {
        collectionId: id,
      },
    })
  }
}
