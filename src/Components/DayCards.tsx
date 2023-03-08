import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";
import { getWeather } from "../Servises/getWeather";
import { dateFormatterFunc } from "../helper/dateFormatter";
import { ICON_MAP } from "../helper/iconMap";

type dailyCardType = {
  time: string[];
  temperature_2m_max: number[];
  weathercode: number[];
};

const DayCards: FC = (): JSX.Element => {
  const [dailyTemp, setDailyTemp] = useState<dailyCardType>();
  useEffect(() => {
    getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
      (res) => {
        setDailyTemp(res.daily);
      }
    );
  }, []);
  console.log(dailyTemp?.time);

  return (
    <>
      <section>
        {" "}
        <div className="day-section d-flex  flex-wrap justify-content-around mt-5 ">
          {" "}
          {dailyTemp
            ? Array.from(
                Array(Object.values(dailyTemp!).length),
                (_, index) => {
                  return (
                    <Col
                      sm={1}
                      key={index}
                      className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
                    >
                      <Image
                        src={`/src/assets/${ICON_MAP.get(
                          dailyTemp.weathercode[index]
                        )}.png`}
                        className="mx-5"
                      />

                      <div className="day-card-day my-3">
                        {dailyTemp.temperature_2m_max[index]}&deg;
                      </div>
                      <span data-current-high>
                        {" "}
                        {dateFormatterFunc(1678226400)}
                      </span>
                    </Col>
                  );
                }
              )
            : ""}
        </div>
        {/* {dailyTemp
          ? Object.values(dailyTemp).map((val, index) => {
              return (
                <Col
                  sm={1}
                  key={index}
                  className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
                >
                  <img src={cloud} className="weather-icon" />
                  <div className="day-card-day my-3">
                    {(console.log(val, "value"), "hi")}
                  </div>
                  <span data-current-high>32 &deg;</span>
                </Col>
              );
            })
          : ""} */}
      </section>
    </>
  );
};

export default DayCards;
