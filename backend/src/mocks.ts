import { vi } from "vitest"
import { FastifyBaseLogger } from "fastify"

vi.mock("../db/prismaClient")
vi.mock("../generated/prisma")
vi.mock("fastify")

export const mockLogger = {
  info: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
} as unknown as FastifyBaseLogger
