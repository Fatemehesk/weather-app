import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloudy.png";
import { getWeather } from "../Servises/getWeather";

export type currentWeatherType = {
  temperature: number;
  windspeed: number;
  weathercode: string;
};
type dailyType = {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  precipitation_sum: number[];
};
const HeaderData: FC = (): JSX.Element => {
  const [currentWeather, setCurrentWeather] = useState<currentWeatherType>();
  const [dailyTemp, setDailyTemp] = useState<dailyType>();
  useEffect(() => {
    getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
      (res) => {
        console.log(res);
        setCurrentWeather(res.current_weather);
        setDailyTemp(res.daily);
      }
    );
  }, []);

  return (
    <Row>
      <Col xs={6}>
        <div className="d-flex border-end border-primary  mt-5  justify-content-center align-items-center header__left">
          <Image src={cloud} data-current-icon />
          <div className="header__left-temp ms-3 ">
            <span data-current-temp>{currentWeather?.temperature} &deg;</span>
          </div>
        </div>
      </Col>
      <Col xs={6}>
        <div className="header__right d-flex flex-row justify-content-between flex-wrap mt-5">
          <div className="--info-group ">
            {" "}
            <div className="--label">High</div>{" "}
            <span data-current-high>
              {" "}
              {dailyTemp?.apparent_temperature_max[0] &&
                Math.round(dailyTemp!.apparent_temperature_max[0])}{" "}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">FL HIGH</div>{" "}
            <span data-current-fl-high>
              {" "}
              {dailyTemp?.apparent_temperature_max[0] &&
                Math.round(dailyTemp!.apparent_temperature_max[0])}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">WIND</div>{" "}
            <span data-current-wind>{currentWeather?.windspeed} mph</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">LOW</div>{" "}
            <span data-current-low>
              {" "}
              {dailyTemp?.temperature_2m_min[0] &&
                Math.round(dailyTemp!.temperature_2m_min[0])}{" "}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">FL LOW</div>{" "}
            <span data-current-fl-row>
              {" "}
              {dailyTemp?.apparent_temperature_min[0] &&
                Math.round(dailyTemp!.apparent_temperature_min[0])}{" "}
              &deg;
            </span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">PRECIP</div>{" "}
            <span data-current-precip>
              {" "}
              {dailyTemp?.precipitation_sum[0] &&
                Math.round(dailyTemp!.precipitation_sum[0])}{" "}
              in
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderData;
