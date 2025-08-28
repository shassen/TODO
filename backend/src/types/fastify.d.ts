import { UserService } from "../services/userService"

declare module "fastify" {
  interface FastifyInstance {
    userService: UserService
  }
}
