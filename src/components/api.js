import "dotenv/config";

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GEO_CITIES_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};
