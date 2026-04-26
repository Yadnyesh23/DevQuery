import app from "./app.js";
import dotenv from "dotenv";
import {logger} from './config/logger.js'

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});

server.on("error", (error) => {
  logger.error("Server error:", error.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});