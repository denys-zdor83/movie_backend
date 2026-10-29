import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// It will help with type completion and recongnition with the name of columns and tables
// we will have it besause of Prisma Client
const prisma = new PrismaClient({
  // Here we are adding a small configuration
  adapter,
  log: process.env.NODE_ENV === "development" 
    ? ["query", "error", "warn"] 
    : ["error"]
})


// Connecting and disconnecting database is asynchronous opperation
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB Connected via Prisma")
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    // it will stop node js app and tell our system that it has eneded because of an error
    process.exit(1)
  }
}

const disconnectDB = async () => {
    await prisma.$disconnect();
}

export {
  prisma,
  connectDB,
  disconnectDB
}
