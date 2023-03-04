import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";

const HourlyTable: FC = (): JSX.Element => {
  return (
    <Row className="mt-4 px-2 overflow-hidden">
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className="my-3">Thursday</div>
          <span>3 PM</span>
        </div>
        <Image src={cloud} width={70} />
        <div className="">
          <div className="my-3">Temp</div>
          <span data-current-temp>31 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">FL Temp</div>
          <span data-current-temp>35 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">Wind</div>
          <span data-current-temp>6 Mph</span>
        </div>
        <div className=" ">
          <div className="my-3">Precip</div>
          <span data-current-precip>.01 in</span>
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className="my-3">Thursday</div>
          <span>3 PM</span>
        </div>
        <Image src={cloud} width={70} />
        <div className="">
          <div className="my-3">Temp</div>
          <span data-current-temp>31 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">FL Temp</div>
          <span data-current-temp>35 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">Wind</div>
          <span data-current-temp>6 Mph</span>
        </div>
        <div className=" ">
          <div className="my-3">Precip</div>
          <span data-current-precip>.01 in</span>
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className="my-3">Thursday</div>
          <span>3 PM</span>
        </div>
        <Image src={cloud} width={70} />
        <div className="">
          <div className="my-3">Temp</div>
          <span data-current-temp>31 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">FL Temp</div>
          <span data-current-temp>35 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">Wind</div>
          <span data-current-temp>6 Mph</span>
        </div>
        <div className=" ">
          <div className="my-3">Precip</div>
          <span data-current-precip>.01 in</span>
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className="my-3">Thursday</div>
          <span>3 PM</span>
        </div>
        <Image src={cloud} width={70} />
        <div className="">
          <div className="my-3">Temp</div>
          <span data-current-temp>31 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">FL Temp</div>
          <span data-current-temp>35 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">Wind</div>
          <span data-current-temp>6 Mph</span>
        </div>
        <div className=" ">
          <div className="my-3">Precip</div>
          <span data-current-precip>.01 in</span>
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex  align-items-center justify-content-around hourly-section overflow-hidden"
      >
        <div className=" d-flex flex-column mb-3 text-uppercase">
          <div className="my-3">Thursday</div>
          <span>3 PM</span>
        </div>
        <Image src={cloud} width={70} />
        <div className="">
          <div className="my-3">Temp</div>
          <span data-current-temp>31 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">FL Temp</div>
          <span data-current-temp>35 &deg;</span>
        </div>
        <div className="">
          <div className="my-3">Wind</div>
          <span data-current-temp>6 Mph</span>
        </div>
        <div className=" ">
          <div className="my-3">Precip</div>
          <span data-current-precip>.01 in</span>
        </div>
      </Col>
    </Row>
  );
};

export default HourlyTable;
