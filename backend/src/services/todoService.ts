import { PrismaClient, Todo } from "../generated/prisma"
import { CreateTodoInput } from "../graphql/TodoCustomResolver"

export type TodoServiceProps = {
  prisma: PrismaClient
}

type UserId = {
  userId: string
}

export class TodoService {
  private prisma: PrismaClient

  constructor({ prisma }: TodoServiceProps) {
    this.prisma = prisma
  }

  async getManyTodos({ userId }: UserId) {
    return await this.prisma.todo.findMany({
      where: {
        creator: {
          id: userId,
        },
      },
    })
  }

  async createTodo({ userId, title, content, dueDate, collectionId }: UserId & CreateTodoInput) {
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
}
