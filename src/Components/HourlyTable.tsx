import { FC, useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";
import {
  dateFormatterToHourFunc,
  dateFormatterFunc,
} from "../helper/dateFormatter";
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
  let rows;
  if (hourlyTemp) {
    rows = hourlyTemp!.time.map((time, index) => {
      return (
        <div key={time} className="my-3 border">
          <div className="mx-5 px-5">{dateFormatterFunc(time)}</div>
          <span className="mx-5 px-5">{dateFormatterToHourFunc(time)}</span>
          <span className="mx-5 px-5">
            <Image src={cloud} width={70} />
          </span>
          <span className="mx-5 px-5">
            {hourlyTemp!.apparent_temperature[index]} &deg;
          </span>
          <span className="mx-5 px-5">
            {hourlyTemp!.temperature_2m[index]}&deg;
          </span>
          <span className="mx-5 px-5">
            {hourlyTemp!.windspeed_10m[index]} Mph
          </span>
          <span className="mx-5 px-5">
            {hourlyTemp!.precipitation_probability[index]} in
          </span>
        </div>
      );
    });
  }

  return (
    <Row className="mt-4 px-2 overflow-hidden">
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className=" d-flex flex-row align-items-center justify-content-around border py-3 mt-3 mx-5 px-5">
            <div>Date</div>

            <div>Weadiver</div>
            <div>Temp</div>
            <div>FL Temp</div>
            <div>Wind</div>
            <div>Precip</div>
          </div>
          <div>{rows}</div>
        </div>
      </Col>
    </Row>
  );
};

export default HourlyTable;

//   return (
//     <Row className="mt-4 px-2 overflow-hidden">
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Weather</th>
//             <th>Temp</th>
//             <th>FL Temp</th>
//             <th>Wind</th>
//             <th>Precip</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     </Row>
//   );
// };

// export default HourlyTable;
