import { UserService } from "../services/userService"
import { AuthService } from "../services/authService"

declare module "fastify" {
  interface FastifyInstance {
    userService: UserService
  }
}
