import { FastifyPluginAsync } from "fastify"
import { requireAuth } from "../middleware/authMiddleware"
import { AuthController } from "../controllers/authController"
import { UserService } from "../services/userService"

const authPlugin: FastifyPluginAsync = async (fastify) => {
  // Get the userService instance from the fastify app
  const userService = (fastify as any).userService
  const authController = new AuthController(userService)
  // const authController = (fastify as any).authService(userService)

  // Public routes
  fastify.get("/welcome", authController.getWelcome)

  // Protected routes
  fastify.get("/dashboard", requireAuth(authController.getDashboard))
  fastify.get("/profile", requireAuth(authController.getProfile))
}

export default authPlugin
