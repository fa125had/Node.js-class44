import express from "express";
import { serverErrorHandler } from "./utils/serverErrorHandler.js";
import { initServer } from "./utils/initServer.js";
import homeRoutes from "./routes/homeRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import dotenv from "dotenv";

dotenv.config();
export const server = new express();
const PORT = process.env.PORT || 3000;

// Body parser
server.use(express.json());

// Handle home routes
server.use("/", homeRoutes);

// Handle Weather routes
server.use("/weather", weatherRoutes);

// Start the server
export const serverListener = server.listen(PORT, () => {
  initServer(serverListener);
});

// Server Error Handling
serverListener.on("error", serverErrorHandler);

// export default server;
