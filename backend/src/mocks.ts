import { vi } from "vitest"
import { FastifyBaseLogger } from "fastify"
import { TodoService } from "./services/todoService"
import { UserService } from "./services/userService"
import { AuthService } from "./services/authService"
import { prisma } from "./db/prismaClient"

// Mock modules
vi.mock("../db/prismaClient")
vi.mock("../generated/prisma")
vi.mock("fastify")

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

export const authServiceMock = {
  hashPassword: vi.fn(),
  verifyPassword: vi.fn(),
  signToken: vi.fn(),
  verifyToken: vi.fn(),
}

// Instantiate services with mocked dependencies
export const todoServiceMock = new TodoService({
  prisma: prisma as any,
  logger: loggerMock,
})

export const userServiceMock = new UserService({
  prisma: prisma as any,
  authService: authServiceMock as any,
  logger: loggerMock,
})
