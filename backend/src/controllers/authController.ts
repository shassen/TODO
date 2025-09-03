import { FastifyReply, FastifyRequest } from "fastify"
import { AuthenticatedRequest } from "../middleware/authMiddleware"
import { UserService } from "../services/userService"

export class AuthController {
  constructor(private userService: UserService) {}

  getWelcome = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
      message: "welcome to the TODO app!",
      description: "This is a simple TODO app built with Fastify, TypeScript, and Prisma.",
      actions: [
        {
          name: "Sign up",
          description: "Create a new account",
          endpoint: "/graphiql",
          method: "POST",
          example: {
            mutation: "registerUser",
            data: { email: "example@example.com", password: "password", name: "Jane Plane" },
          },
        },
        {
          name: "Log In",
          description: "Log in to your account",
          endpoint: "/graphiql",
          method: "POST",
          example: {
            mutation: "loginUser",
            data: { email: "example@example.com", password: "password" },
          },
        },
      ],
      documentation: "Visit /graphiql to get more information about the API",
    })
  }

  getDashboard = async (request: AuthenticatedRequest, reply: FastifyReply) => {
    try {
      const { userId } = request.user
      const user = await this.userService.findUserById({ userId }, request.id)

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
    const user = await this.userService.findUserById({ userId }, request.id)
    reply.send({ message: `Profile for ${user?.name}, please enjoy your stay!` })
  }
}
