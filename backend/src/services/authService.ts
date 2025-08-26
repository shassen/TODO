import * as bcrypt from "bcrypt";

export type AuthServiceProps = {
  saltRounds?: number; // optional, defaults to 10
};

export class AuthService {
  private saltRounds: number;

  constructor({ saltRounds = 10 }: AuthServiceProps = {}) {
    this.saltRounds = saltRounds;
  }

  // Hash a plain text password
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  // Compare a plain text password to a hashed password
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
