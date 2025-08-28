import * as bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()

if (!process.env.JWT_SECRET) {
  throw new Error("missing JWT_SECRET....")
}

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || "10d"

export type AuthServiceProps = {
  saltRounds?: number // optional, defaults to 10
}

export class AuthService {
  private saltRounds: number

  constructor({ saltRounds = 10 }: AuthServiceProps = {}) {
    this.saltRounds = saltRounds
  }

  // Hash a plain text password
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds)
  }

  // Compare a plain text password to a hashed password
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }

  // Create a JWT for a given userId
  static signToken(userId: string): string {
    // return jwt.sign({ userId }, JWT_SECRET, {
    //   expiresIn: JWT_EXPIRES_IN,
    // })
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "10d" })
  }

  // Verify a JWT and return the payload (or throw if invalid/expired)
  static verifyToken(token: string): { userId: string } {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  }
}
