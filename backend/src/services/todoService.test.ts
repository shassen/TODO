import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { TodoService } from "./todoService"
import { prisma } from "../db/prismaClient"
import { mockLogger } from "../mocks"
import { Todo } from "../generated/prisma"

describe("todoService test suite", () => {
  let todoService: TodoService
  const userId = "userId-123"
  const reqId = "reqId-123"

  beforeEach(() => {
    todoService = new TodoService({
      prisma: prisma as any,
      logger: mockLogger as any,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("Should call getManyTodos but not find any todos", async () => {
    vi.spyOn(prisma.todo, "findMany").mockResolvedValue([])

    const todos = await todoService.getManyTodos(reqId, { userId })

    expect(todos).toEqual([])
    expect(todoService["logger"].info).toHaveBeenCalledWith({ reqId, userId }, "Getting many todos")
  })

  it("Should call getManyTodos and find many todos", async () => {
    const todoData = [
      {
        id: "todoId-123",
        title: "Todo 1",
        content: "Content 1",
        completed: false,
        createdAt: new Date(),
      },
    ] as Todo[]

    vi.spyOn(prisma.todo, "findMany").mockResolvedValue(todoData)

    const todos = await todoService.getManyTodos(reqId, { userId })
    expect(todos).toEqual(todoData)
  })

  it("Should call createTodo", async () => {
    const todoData = {
      id: "todoId-123",
      title: "Todo 1",
      content: "Content 1",
      completed: false,
      createdAt: new Date(),
      creatorId: userId,
      collectionId: "collectionId-123",
      isDeleted: false,
      isArchived: false,
      dueDate: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      archivedAt: null,
    }

    vi.spyOn(prisma.todo, "create").mockResolvedValue(todoData)

    const todo = await todoService.createTodo(reqId, { userId, ...todoData })

    expect(todo).toEqual(todoData)
    expect(todoService["logger"].info).toHaveBeenCalledWith({ reqId, userId }, "Creating todo")
  })
})
