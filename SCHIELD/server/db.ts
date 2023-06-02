import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.MONGO_URI,
        },
      },
    });
  }
  return prisma;
}

export default prisma;
