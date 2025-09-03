import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { TodoService } from "./todoService"
import { prisma } from "../db/prismaClient"
import { loggerMock } from "../mocks"
import { Todo } from "../generated/prisma"
import { todoServiceMock } from "../mocks"

describe("todoService test suite", () => {
  const userId = "userId-123"
  const reqId = "reqId-123"

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("Should call getManyTodos but not find any todos", async () => {
    vi.spyOn(prisma.todo, "findMany").mockResolvedValue([])

    const todos = await todoServiceMock.getManyTodos(reqId, { userId })

    expect(todos).toEqual([])
    expect(todoServiceMock["logger"].info).toHaveBeenCalledWith(
      { reqId, userId },
      "Getting many todos",
    )
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

    const todos = await todoServiceMock.getManyTodos(reqId, { userId })
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

    const todo = await todoServiceMock.createTodo(reqId, { userId, ...todoData })

    expect(todo).toEqual(todoData)
    expect(todoServiceMock["logger"].info).toHaveBeenCalledWith({ reqId, userId }, "Creating todo")
  })
})
