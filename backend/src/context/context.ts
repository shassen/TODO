// context.ts
import { FastifyRequest, FastifyReply, FastifyBaseLogger } from "fastify"
import { AuthService } from "../services/authService"
import { UserService } from "../services/userService"
import { TodoService } from "../services/todoService"
import { CollectionService } from "../services/collectionService"

export interface GraphQLContext {
  user: { userId: string } | null
  userService: UserService
  authService: AuthService
  todoService: TodoService
  collectionService: CollectionService
  logger: FastifyBaseLogger
  reqId: string
}

export const createContext = (
  userService: UserService,
  authService: AuthService,
  todoService: TodoService,
  collectionService: CollectionService,
  logger: FastifyBaseLogger,
) => {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<GraphQLContext> => {
    let user = null

    const authHeader = request.headers["authorization"]
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1]
      try {
        user = AuthService.verifyToken(token, request.id, logger)
      } catch (err: unknown) {
        if (err instanceof Error) {
          logger.warn({ message: err.message }, "Invalid JWT token:")
        } else {
          logger.warn({ message: err }, "Invalid JWT token:")
        }
      }
    }

    return {
      user,
      userService,
      authService,
      todoService,
      collectionService,
      logger,
      reqId: request.id,
    }
  }
}
