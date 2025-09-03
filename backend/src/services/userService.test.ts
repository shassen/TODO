import { describe, it, expect, afterEach, vi } from "vitest"
import { loggerMock } from "../mocks"
import { userServiceMock } from "../mocks"
import { prisma } from "../db/prismaClient"
import { User } from "../generated/prisma"

describe("userService test suite", () => {
  const userId = "userId-123"
  const reqId = "reqId-123"
  const email = "test@test.com"

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("Should find user by id", async () => {
    vi.spyOn(prisma.user, "findUnique").mockResolvedValueOnce({ id: userId } as User)

    const user = await userServiceMock.findUserById({ userId }, reqId)

    expect(user).toEqual({ id: userId })
    expect(userServiceMock["logger"].info).toHaveBeenCalledWith(
      { reqId, userId },
      "Finding user by id",
    )
  })

  it("Should find user by email", async () => {
    vi.spyOn(prisma.user, "findUnique").mockResolvedValue({ email } as User)

    const user = await userServiceMock.findUserByEmail({ email }, reqId)

    expect(user).toEqual({ email })
    expect(userServiceMock["logger"].info).toHaveBeenCalledWith(
      { reqId, email },
      "Finding user by email",
    )
  })
})
