import express from "express";
import { getHome } from "../controllers/homeController.js";

const homeRoutes = express.Router();

// GET home directory
homeRoutes.get("/", getHome);

export default homeRoutes;
