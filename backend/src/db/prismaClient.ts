import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient();

export const connectDb = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to MongoDB via Prisma");
  } catch (err) {
    console.error("❌ Prisma connection error: ", err);
    process.exit(1);
  }
};
