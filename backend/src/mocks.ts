import { vi } from "vitest"
import { FastifyBaseLogger } from "fastify"
import { TodoService } from "./services/todoService"
import { UserService } from "./services/userService"
import { AuthService } from "./services/authService"
import { CollectionService } from "./services/collectionService"
import { prisma } from "./db/prismaClient"

// Mock modules
vi.mock("../db/prismaClient")
vi.mock("../generated/prisma")
vi.mock("fastify")
vi.mock("bcrypt")
// vi.mock("jsonwebtoken", () => ({
//   sign: vi.fn(),
//   verify: vi.fn(),
// }))

export const jwtMock = {
  sign: vi.fn(),
  verify: vi.fn(),
}

// Mock dependencies
export const loggerMock = {
  info: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
  debug: vi.fn(),
  trace: vi.fn(),
  fatal: vi.fn(),
  child: vi.fn(() => loggerMock),
} as unknown as FastifyBaseLogger

// Instantiate services with mocked dependencies
export const todoServiceMock = new TodoService({
  prisma: prisma as any,
  logger: loggerMock,
})

export const authServiceMock = new AuthService({ logger: loggerMock })

export const userServiceMock = new UserService({
  prisma: prisma as any,
  authService: authServiceMock as any,
  logger: loggerMock,
})

export const collectionServiceMock = new CollectionService({
  prisma: prisma as any,
  logger: loggerMock,
})
