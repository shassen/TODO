import { Collection, PrismaClient, Todo } from "../generated/prisma"
import { CreateTodoInput } from "../graphql/TodoCustomResolver"
import { FastifyBaseLogger } from "fastify"

export type TodoServiceProps = {
  prisma: PrismaClient
  logger: FastifyBaseLogger
}

export type UserId = {
  userId: string
}

type ReqId = {
  reqId: string
}

export class TodoService {
  private prisma: PrismaClient
  private logger: FastifyBaseLogger

  constructor({ prisma, logger }: TodoServiceProps) {
    this.prisma = prisma
    this.logger = logger
  }

  async getManyTodos(reqId: string, { userId }: UserId) {
    this.logger.info({ userId, reqId }, "Getting many todos")
    return await this.prisma.todo.findMany({
      where: {
        creator: {
          id: userId,
        },
      },
    })
  }

  async createTodo(
    reqId: string,
    { userId, title, content, dueDate, collectionId }: UserId & CreateTodoInput,
  ) {
    this.logger.info({ reqId, userId }, "Creating todo")
    const todo = await this.prisma.todo.create({
      data: {
        title,
        content,
        dueDate,
        collection: collectionId
          ? {
              connect: {
                id: collectionId,
              },
            }
          : undefined,
        creator: {
          connect: {
            id: userId,
          },
        },
      },
    })

    return todo
  }

  async getManyTodosByCollectionId(
    { id: collectionId, userId }: { id: string; userId: string },
    reqId: string,
  ) {
    this.logger.info({ reqId, collectionId }, "Getting many todos for collection")

    const todos = await this.prisma.todo.findMany({
      where: {
        collectionId,
        creatorId: userId,
      },
    })

    return todos
  }
}
