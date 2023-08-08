import express from "express";
import { postCity } from "../controllers/weatherController.js";

const weatherRoutes = express.Router();

// POST new city
weatherRoutes.post("/", postCity);

export default weatherRoutes;
