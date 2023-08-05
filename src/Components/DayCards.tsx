import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";
import { getWeather } from "../Servises/getWeather";
import { dateFormatterFunc } from "../helper/dateFormatter";
import { ICON_MAP } from "../helper/iconMap";

type dailyCardType = {
  time: any[];
  temperature_2m_max: number[];
  weathercode: number[];
};
const mockData: dailyCardType = {
  time: [
    1672477600, // Unix timestamp for some date (Day 1)
    1672564000, // Day 2 (Add 1 day's worth of seconds to the previous timestamp)
    1672650400, // Day 3
    1672736800, // Day 4
    1672823200, // Day 5
    1672909600, // Day 6
    1672996000,
  ],
  temperature_2m_max: [28, 30, 27, 32, 29, 25, 23],
  weathercode: [1, 2, 3, 1, 2, 3, 2],
};
const DayCards: FC = (): JSX.Element => {
  const [dailyTemp, setDailyTemp] = useState<dailyCardType>(mockData);
  // useEffect(() => {
  //   getWeather(
  //     59.42,
  //     24.8,
  //     Intl.DateTimeFormat().resolvedOptions().timeZone
  //   ).then((res) => {
  //     setDailyTemp(res.daily);
  //   });
  // }, [dailyTemp]);
  console.log(dailyTemp, "daily");

  return (
    <section>
      <div className=" mt-5">
        <div className="row justify-content-around w-100 mx-auto">
          {dailyTemp && dailyTemp.time.length > 0
            ? Array.from(Array(dailyTemp.time.length), (_, index) => {
                return (
                  <div
                    className=" col-xs-1 col-sm-5 col-md-4  col-xxl-1 mt-3 "
                    key={index}
                  >
                    <div className="Day-card d-flex flex-column rounded-2 justify-content-center align-items-center p-3">
                      <img
                        src={`/src/assets/${ICON_MAP.get(
                          dailyTemp.weathercode[index]
                        )}.png`}
                        alt=""
                      />

                      <div className="day-card-day my-3">
                        {dailyTemp.temperature_2m_max[index]}&deg;
                      </div>
                      <span data-current-high>
                        {dateFormatterFunc(dailyTemp.time[index])}
                      </span>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
};

export default DayCards;
