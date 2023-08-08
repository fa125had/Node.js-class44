import express from "express";
import { serverErrorHandler } from "./utils/serverErrorHandler.js";
import { initServer } from "./utils/initServer.js";
import homeRoutes from "./routes/homeRoutes.js";

const server = new express();
const PORT = process.env.PORT || 3000;

// 
server.use("/", homeRoutes);

// Start the server
const serverListener = server.listen(PORT, () => {
  initServer(serverListener);
});

// Server Error Handling
serverListener.on("error", serverErrorHandler);
