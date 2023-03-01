import axios from "axios";

export function getWeather(lat: number, lon: number, timezone: string) {
  return axios
    .get(
      "https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime",
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      }
    )
    .then(({ data }) => {
      return data;
    });
}

// const parseCurrentWeather = (data: any) => {
//   console.log(data, "data");
//   interface currentWeatherType {
//     temperature: number;
//     windSpeed: number;
//     weathercode: string;
//   }
//   interface dailyType {
//     temperature_2m_max: number[];
//     temperature_2m_min: number[];
//     apparent_temperature_max: number[];
//     apparent_temperature_min: number[];
//     precipitation_sum: number[];
//   }
//   const {
//     temperature: currentTemp,
//     windSpeed: windSpeed,
//     weathercode: iconCode,
//   }: currentWeatherType = data.current_weather;

//   const {
//     temperature_2m_max: [maxTemp],
//     temperature_2m_min: [minTemp],
//     apparent_temperature_max: [maxFeelsLike],
//     apparent_temperature_min: [minFeelsLike],
//     precipitation_sum: [precip],
//   }: dailyType = data.daily;

//   return {
//     currentTemp,
//     highTemp: Math.round(maxTemp),
//     lowTemp: Math.round(minTemp),
//     highfeelsTemp: Math.round(maxFeelsLike),
//     lowfeelsTemp: Math.round(minFeelsLike),
//     windSpeed: Math.round(windSpeed),
//     precip: Math.round(precip * 100) / 100,
//     iconCode,
//   };
// };
// const parseDailyWeather = (data: {}) => {};
// const parseHourlyWeather = (data: {}) => {};
