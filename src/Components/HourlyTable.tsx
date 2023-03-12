import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";
import { getWeather } from "../Servises/getWeather";

type hourlyCardType = {
  time: any[];
  temperature_2m: number[];
  apparent_temperature: number[];
  weathercode: number[];
  precipitation_probability: number[];
  windspeed_10m: number[];
};
const HourlyTable: FC = (): JSX.Element => {
  const [hourlyTemp, sethourlyTemp] = useState<hourlyCardType>();
  useEffect(() => {
    getWeather(
      59.42,
      24.8,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    ).then((res) => {
      sethourlyTemp(res.hourly);
    });
  }, []);
  console.log(hourlyTemp, "hourly");
  return (
    <Row className="mt-4 px-2 overflow-hidden">
      {hourlyTemp && hourlyTemp
        ? Array.from(Array(Object.values(hourlyTemp).length), (_, index) => {
            return (
              <Col
                xs={12}
                className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
              >
                <div className=" d-flex flex-column mb-3 text-uppercase">
                  <div className="my-3">{hourlyTemp.time[index]}</div>
                  <span>{hourlyTemp.time[index]}</span>
                </div>
                <Image src={cloud} width={70} />
                <div className="">
                  <div className="my-3">Temp</div>
                  <span data-current-temp>
                    {hourlyTemp.apparent_temperature[index]} &deg;
                  </span>
                </div>
                <div className="">
                  <div className="my-3">FL Temp</div>
                  <span data-current-temp>
                    {hourlyTemp.temperature_2m[index]}&deg;
                  </span>
                </div>
                <div className="">
                  <div className="my-3">Wind</div>
                  <span data-current-temp>
                    {hourlyTemp.windspeed_10m[index]} Mph
                  </span>
                </div>
                <div className=" ">
                  <div className="my-3">Precip</div>
                  <span data-current-precip>
                    {hourlyTemp.precipitation_probability[index]} in
                  </span>
                </div>
              </Col>
            );
          })
        : ""}
    </Row>
  );
};

export default HourlyTable;
