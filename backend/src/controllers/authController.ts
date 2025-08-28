import { FastifyReply, FastifyRequest } from "fastify"
import { AuthenticatedRequest } from "../middleware/authMiddleware"
import { UserService } from "../services/userService"

export class AuthController {
  constructor(private userService: UserService) {}

  getDashboard = async (request: AuthenticatedRequest, reply: FastifyReply) => {
    try {
      const { userId } = request.user
      const user = await this.userService.findUserById({ userId })

      if (!user) {
        return reply.status(404).send({ error: "User not found", message: "User not found" })
      }

      reply.send({
        message: `Welcome to your dashboard, ${user.name + " @ " + user.email}`,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      })
    } catch (err) {
      reply.status(500).send({ error: "Internal server error", message: "Failed to fetch user" })
    }
  }

  getProfile = async (request: AuthenticatedRequest, reply: FastifyReply) => {
    const { userId } = request.user
    const user = await this.userService.findUserById({ userId })
    reply.send({ message: `Profile for ${user?.name}, please enjoy your stay!` })
  }
}
