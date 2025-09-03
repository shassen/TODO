import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { CollectionService } from "./collectionService"
import { prisma } from "../db/prismaClient"
import { loggerMock } from "../mocks"
import { Collection } from "../generated/prisma"
import { collectionServiceMock } from "../mocks"

describe("collectionService test suite", () => {
  const reqId = "reqId-123"
  const userId = "userId-123"

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("Should call getManyCollections but not find any collections", async () => {
    vi.spyOn(prisma.collection, "findMany").mockResolvedValue([])

    const collections = await collectionServiceMock.getManyCollections({ userId }, reqId)

    expect(collections).toEqual([])
    expect(collectionServiceMock["logger"].info).toHaveBeenCalledWith(
      { reqId, userId },
      "Getting many collections",
    )
  })
})
