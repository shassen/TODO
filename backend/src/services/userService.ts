import { PrismaClient, User } from "../generated/prisma"
import { AuthService } from "./authService"
import { RegisterUserInput } from "../graphql/UserCustomResolver"

export type UserServiceProps = {
  prisma: PrismaClient
  authService: AuthService
}

export class UserService {
  private prisma: PrismaClient
  private authService: AuthService

  constructor({ prisma, authService }: UserServiceProps) {
    this.prisma = prisma
    this.authService = authService
  }

  // Step 2: createUser method
  async createUser({ email, password, name }: RegisterUserInput) {
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

  // We can add more user methods later (findUserByEmail, updateUser, etc.)
}
