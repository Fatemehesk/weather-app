import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cloud from "../assets/cloud.png";

const HeaderData: FC = (): JSX.Element => {
  return (
    <Row>
      <Col xs={6}>
        <div className="d-flex border-end border-primary  mt-5  justify-content-center align-items-center header__left">
          <Image src={cloud} data-current-icon />
          <div className="header__left-temp ms-3 ">
            <span data-current-temp>31 &deg;</span>
          </div>
        </div>
      </Col>
      <Col xs={6}>
        <div className="header__right d-flex flex-row justify-content-between flex-wrap mt-5">
          <div className="--info-group ">
            {" "}
            <div className="--label">High</div>{" "}
            <span data-current-high>32 &deg;</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">FL HIGH</div>{" "}
            <span data-current-fl-high>27&deg;</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">WIND</div>{" "}
            <span data-current-wind>9 mph</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">LOW</div>{" "}
            <span data-current-low>19 &deg;</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">FL LOW</div>{" "}
            <span data-current-fl-row>12 &deg;</span>
          </div>
          <div className="--info-group">
            {" "}
            <div className="--label">PRECIP</div>{" "}
            <span data-current-precip>.01 in</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderData;
