// context.ts
import { FastifyRequest, FastifyReply } from "fastify"
import { AuthService } from "../services/authService"
import { UserService } from "../services/userService"

export interface GraphQLContext {
  user: { userId: string } | null
  userService: UserService
  authService: AuthService
}

export const createContext = (userService: UserService, authService: AuthService) => {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<GraphQLContext> => {
    let user = null

    const authHeader = request.headers["authorization"]
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1]
      try {
        user = AuthService.verifyToken(token)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.warn("Invalid JWT token:", err.message)
        } else {
          console.warn("Invalid JWT token:", err)
        }
      }
    }

    return { user, userService, authService }
  }
}
