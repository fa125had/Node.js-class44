import fetch from "node-fetch";
import { serverErrorHandler } from "../utils/serverErrorHandler.js";
import { API_KEY } from "./keys.js";

export const getCurrentWeather = async (city) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY || API_KEY;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
      { headers, method: "post" }
    );

    // check if api response is ok or not
    if (response.status !== 200) {
      return {
        error: true,
        status: response.status,
        weatherText: `${city} ${response.statusText}`,
      };
    }

    const data = await response.json();

    return data;
  } catch (error) {
    serverErrorHandler(error);
  }
};
