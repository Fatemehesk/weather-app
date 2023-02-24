import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";

const DayCards: FC = (): JSX.Element => {
  return (
    <>
      <section
        className="day-section d-flex  flex-wrap justify-content-around mt-5 "
        data-day-section
      >
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
        <Col
          sm={1}
          className="Day-card border d-flex flex-column border-dark rounded-2 justify-content-center align-items-center pb-3 me-3"
        >
          <img src={cloud} className="weather-icon" />
          <div className="day-card-day my-3">Thursday</div>
          <span data-current-high>32 &deg;</span>
        </Col>
      </section>
    </>
  );
};

export default DayCards;
