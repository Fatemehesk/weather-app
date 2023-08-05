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
  // useEffect(() => {
  //   getWeather(
  //     59.42,
  //     24.8,
  //     Intl.DateTimeFormat().resolvedOptions().timeZone
  //   ).then((res) => {
  //     sethourlyTemp(res.hourly);
  //   });
  // }, []);
  useEffect(() => {
    // Mock data
    const mockHourlyData: hourlyCardType = {
      time: [1, 2, 3, 4, 5],
      temperature_2m: [20, 22, 18, 19, 21],
      apparent_temperature: [19, 20, 16, 17, 18],
      weathercode: [1, 3, 2, 4, 1],
      precipitation_probability: [10, 20, 5, 30, 15],
      windspeed_10m: [5, 7, 4, 6, 5],
    };

    sethourlyTemp(mockHourlyData);
  }, []);
  let rows;
  if (hourlyTemp) {
    rows = hourlyTemp!.time.map((time, index) => {
      return (
        <div key={time} className="hourly-countainer">
          <div>{dateFormatterFunc(time)}</div>
          <span>{dateFormatterToHourFunc(time)}</span>
          <span>
            <Image src={cloud} width={70} />
          </span>
          <span>{hourlyTemp!.apparent_temperature[index]} &deg;</span>
          <span>{hourlyTemp!.temperature_2m[index]}&deg;</span>
          <span>{hourlyTemp!.windspeed_10m[index]} Mph</span>
          <span>{hourlyTemp!.precipitation_probability[index]} in</span>
        </div>
      );
    });
  }

  return (
    <Row className="mt-4 px-2 overflow-hidden ">
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className=" hourly-header">
            <div>Date</div>
            <div>Time</div>
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
