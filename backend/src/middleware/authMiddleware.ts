import { FastifyRequest, FastifyReply } from "fastify"
import { AuthService } from "../services/authService"

export interface AuthenticatedRequest extends FastifyRequest {
  user: { userId: string }
}

export const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers["authorization"]

  if (!authHeader?.startsWith("Bearer ")) {
    return reply.status(401).send({
      error: "Unauthorized",
      message: "Missing or invalid authorization header",
    })
  }

  const token = authHeader.split(" ")[1]

  try {
    const user = AuthService.verifyToken(token, request.id, request.log)
    ;(request as AuthenticatedRequest).user = user
  } catch (err) {
    return reply.status(401).send({
      error: "Unauthorized",
      message: "Invalid or expired token",
    })
  }
}

export const requireAuth = (
  handler: (request: AuthenticatedRequest, reply: FastifyReply) => Promise<any>,
) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    await authMiddleware(request, reply)

    if (reply.sent) return // Auth failed

    return handler(request as AuthenticatedRequest, reply)
  }
}
