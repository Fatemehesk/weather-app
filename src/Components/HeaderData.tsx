import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { getWeather } from "../Servises/getWeather";
import { ICON_MAP } from "../helper/iconMap";
import cloud from "../assets/cloud.png";

// export type currentWeatherType = {
//   temperature: number;
//   windspeed: number;
//   weathercode: string;
// };
export type WeatherType = {
  name:string,
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
};
// export type dailyType = {
//   temperature_2m_max: number[];
//   temperature_2m_min: number[];
//   apparent_temperature_max: number[];
//   apparent_temperature_min: number[];
//   precipitation_sum: number[];
// };
const HeaderData: FC<WeatherType> = ({ weather, wind, main , name }): JSX.Element => {
  // const [currentWeather, setCurrentWeather] = useState<currentWeatherType>();
  // const [dailyTemp, setDailyTemp] = useState<dailyType>();
  // useEffect(() => {
  //   getWeather(
  //     59.42,
  //     24.8,
  //     Intl.DateTimeFormat().resolvedOptions().timeZone
  //   ).then((res) => {
  //     setCurrentWeather(res.current_weather);
  //     setDailyTemp(res.daily);
  //   });
  // }, []);

  return (
    <Row>
      <Col xs={12} md={6}>
        <div className="d-flex border-end border-primary  mt-5  justify-content-center align-items-center header__left">
         {weather && weather.length !== 0 ? <Image src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} /> :"" }
          <div className="header__left-temp ms-3 ">
            <h3>{name}</h3>
            <span >{main?.temp} &deg;C</span>
          </div>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="header__right d-flex flex-row justify-content-between flex-wrap mt-5">
          <div className="--info-group ">
            <div className="--label">High</div>
            <span data-current-high>
              {Math.round(main?.temp_max)}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            <div className="--label">discription</div>
            <span>
              {weather && weather.length !== 0 ? weather[0]?.description : ""}
            </span>
          </div>
          <div className="--info-group">
            <div className="--label">WIND</div>
            <span data-current-wind>{wind?.deg} mph</span>
          </div>
          <div className="--info-group">
            <div className="--label">humidity</div>
            <span data-current-low>
              {main?.humidity}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            <div className="--label">FEELS LIKE</div>
            <span data-current-fl-row>
              {main?.feels_like}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            <div className="--label">PRESSURE</div>
            <span data-current-precip>
              {main?.pressure}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderData;
