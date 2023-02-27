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
      return {
        current: parseCurrentWeather(data),
        daily: parseDailyWeather(data),
        hourly: parseHourlyWeather(data),
      };
    });
}

const parseCurrentWeather = (arg: { current_weather: any; daily: any }) => {
  interface currentWeather {
    temperature: number;
    windSpeed: number;
    weathercode: string;
  }
  const {
    temperature: currentTemp,
    windSpeed: windSpeed,
    weathercode: iconCode,
  } = arg.current_weather;

  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
    precipitation_sum: [precip],
  } = arg.daily;

  return {
    currentTemp,
    highTemp: maxTemp,
    lowTemp: minTemp,
    highfeelsTemp: maxFeelsLike,
    lowfeelsTemp: minFeelsLike,
    windSpeed,
    precip: precip,
    iconCode,
  };
};
const parseDailyWeather = (data: {}) => {};
const parseHourlyWeather = (data: {}) => {};
