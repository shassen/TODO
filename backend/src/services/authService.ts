import * as bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { FastifyBaseLogger } from "fastify"
dotenv.config()

if (!process.env.JWT_SECRET) {
  throw new Error("missing JWT_SECRET....")
}

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || "10d"

export type AuthServiceProps = {
  logger: FastifyBaseLogger
  saltRounds?: number // optional, defaults to 10
}

export class AuthService {
  private logger: FastifyBaseLogger
  private saltRounds: number

  constructor({ logger, saltRounds = 10 }: AuthServiceProps) {
    this.logger = logger
    this.saltRounds = saltRounds
  }

  // Hash a plain text password
  async hashPassword(password: string, reqId: string): Promise<string> {
    this.logger.info({ reqId }, "Hashing password")
    return bcrypt.hash(password, this.saltRounds)
  }

  // Compare a plain text password to a hashed password
  async verifyPassword(password: string, hash: string, reqId: string): Promise<boolean> {
    this.logger.info({ reqId }, "Verifying password")
    return bcrypt.compare(password, hash)
  }

  // Create a JWT for a given userId
  static signToken(userId: string, reqId: string, logger: FastifyBaseLogger): string {
    logger.info({ reqId }, "Signing token")
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "10d" })
  }

  // Verify a JWT and return the payload (or throw if invalid/expired)
  static verifyToken(token: string, reqId: string, logger: FastifyBaseLogger): { userId: string } {
    logger.info({ reqId }, "Verifying token")
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  }
}
