import { getCurrentWeather } from "../sources/open-weather-map-Api.js";
import { serverErrorHandler } from "../utils/serverErrorHandler.js";

export const postCity = async (req, res) => {
  try {
    // grab city name from body request
    const cityName = req.body.cityName;

    // check if city name is provided or not
    if (!cityName) {
      return res.status(400).send('Missing mandatory property. "cityName"');
    }

    // fetch current temperature for the city
    const data = await getCurrentWeather(cityName);

    // check if response is ok
    if (data.error) {
      console.log(`${data.weatherText}, error code: ${data.status}`);
      return res.send(data);
    }

    // convert source temp(kelvin) to celsius
    const celsius = data.main.temp - 273.15;
    // log the city temperature in celsius
    console.log(`${cityName.toUpperCase()} found!\nCurrent Temperature: ${celsius.toFixed(2)}°C`);

    res.send({
      weatherText: "city found!",
      city: cityName,
      temperature: celsius.toFixed(2)
    });
  } catch (error) {
    serverErrorHandler(error);
  }
};
