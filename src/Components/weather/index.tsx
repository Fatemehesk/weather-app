import { useEffect } from "react";
import { useState } from "react";
import Search from "../search";
import HeaderData from "../HeaderData";
export type currentWeatherType = {
  name: string;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { deg: number; speed: number };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    feels_like: number;
    humidity: number;
  };
  coord: { lat: number; lon: number };
};
const Weather = () => {
  const [searchVal, setSearchVal] = useState("");
  const [weatherData, setWeatherData] = useState<currentWeatherType>();
  const [loading, setLoading] = useState(false);
  const [loadingDaily, setLoadingDaily] = useState(false);
  const fetchWeatherData = async (param: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${API_Key}&units=metric `
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        fetchDailyData(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const fetchDailyData = async (param: currentWeatherType) => {
    try {
      setLoadingDaily(true);
      console.log(param.coord.lat, param.coord.lon);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${param.coord.lat}&lon=${param.coord.lon}&cnt=7&appid=${API_Key} `
      );
      const data = await res.json();
      if (data) {
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingDaily(false);
    }
  };
  useEffect(() => {
    fetchWeatherData("tallinn");
  }, []);
  const searchDataHandler = () => {
    fetchWeatherData(searchVal);
    setSearchVal("");
  };

  return (
    <div>
      <Search
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        serachHandler={searchDataHandler}
      />

      <HeaderData
        weather={weatherData ? weatherData?.weather : []}
        wind={weatherData ? weatherData?.wind : { deg: 0, speed: 0 }}
        main={
          weatherData
            ? weatherData?.main
            : {
                temp: 0,
                temp_max: 0,
                temp_min: 0,
                pressure: 0,
                feels_like: 0,
                humidity: 0,
              }
        }
        name={weatherData ? weatherData.name : ""}
      />
    </div>
  );
};
export default Weather;
