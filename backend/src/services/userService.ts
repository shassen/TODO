import { PrismaClient, User } from "../generated/prisma"
import { AuthService } from "./authService"
import { RegisterUserInput } from "../graphql/UserCustomResolver"
import { FastifyBaseLogger } from "fastify"

export type UserServiceProps = {
  prisma: PrismaClient
  authService: AuthService
  logger: FastifyBaseLogger
}

export class UserService {
  private prisma: PrismaClient
  private authService: AuthService
  private logger: FastifyBaseLogger

  constructor({ prisma, authService, logger }: UserServiceProps) {
    this.prisma = prisma
    this.authService = authService
    this.logger = logger
  }

  // Step 2: createUser method
  async createUser({ email, password, name }: RegisterUserInput, reqId: string) {
    this.logger.info({ reqId }, "Creating user")
    // Hash the password
    const hashedPassword = await this.authService.hashPassword(password)

    // Create the user in the DB
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return user
  }

  // find user by email
  async findUserByEmail({ email }: { email: string }, reqId: string) {
    this.logger.info({ reqId, email }, "Finding user by email")
    return await this.prisma.user.findUnique({
      where: { email },
    })
  }

  async findUserById({ userId }: { userId: string }, reqId: string) {
    this.logger.info({ reqId, userId }, "Finding user by id")
    return await this.prisma.user.findUnique({
      where: { id: userId },
    })
  }

  // authenticate user
  async authenticateUser(
    { email, password }: { email: string; password: string },
    reqId: string,
  ): Promise<User> {
    const user = await this.findUserByEmail({ email }, reqId)
    if (!user) {
      throw new Error("No user found with this email")
    }
    const isPasswordValid = await this.authService.verifyPassword(password, user.password)

    if (!isPasswordValid) {
      throw new Error("Invalid password")
    }

    return user
  }

  // We can add more user methods later (findUserByEmail, updateUser, etc.)
}
