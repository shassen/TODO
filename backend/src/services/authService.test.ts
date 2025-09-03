import { describe, it, expect, vi, afterEach, beforeEach, beforeAll, afterAll } from "vitest"
import * as bcrypt from "bcrypt"
import { authServiceMock, loggerMock, jwtMock } from "../mocks"

describe("authService test suite", () => {
  const reqId = "reqId-123"
  const password = "password123"
  const hashedPassword = "hashedPassword123"
  const wrongPassword = "wrongPassword123"
  const userId = "userId-123"

  beforeAll(() => {
    vi.stubEnv("JWT_SECRET", "super_secret_secret")
    vi.stubEnv("JWT_EXPIRES_IN", "10d")
  })

  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.unstubAllEnvs()
  })

  it("Should hash a password", async () => {
    vi.spyOn(bcrypt, "hash").mockResolvedValue(hashedPassword as any)

    const hash = await authServiceMock.hashPassword(password, reqId)

    expect(hash).toEqual(hashedPassword)
  })

  it("Should verify a password", async () => {
    vi.spyOn(bcrypt, "compare").mockResolvedValueOnce(true as any)
    const isCorrectPasswordVerfied = await authServiceMock.verifyPassword(
      password,
      hashedPassword,
      reqId,
    )
    expect(bcrypt.compare).toHaveBeenCalledWith(password, hashedPassword)
    expect(isCorrectPasswordVerfied).toBeTruthy()

    vi.spyOn(bcrypt, "compare").mockResolvedValueOnce(false as any)
    const isIncorrectPasswordVerfied = await authServiceMock.verifyPassword(
      wrongPassword,
      hashedPassword,
      reqId,
    )
    expect(bcrypt.compare).toHaveBeenCalledWith(wrongPassword, hashedPassword)
    expect(isIncorrectPasswordVerfied).toBeFalsy()
  })
})
