import express from "express";
import { serverErrorHandler } from "./utils/serverErrorHandler.js";
import { initServer } from "./utils/initServer.js";
import homeRoutes from "./routes/homeRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const server = new express();
const PORT = process.env.PORT || 3000;

// Body parser
server.use(express.json());

// Handle home routes
server.use("/", homeRoutes);

// Handle Weather routes
server.use("/weather", weatherRoutes);

// Start the server
const serverListener = server.listen(PORT, () => {
  initServer(serverListener);
});

// Server Error Handling
serverListener.on("error", serverErrorHandler);
