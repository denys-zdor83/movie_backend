import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

// Import routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js"

config();
connectDB();

const app = express();

// Body parsing middlewares
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// API Routes. Here we apply our routes. Do it for each individual route
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);

const PORT = 5001;

// The callback function will run whenever this server successfully
// initiates on this port
const server = app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
})

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
})

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
})

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.error("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
})