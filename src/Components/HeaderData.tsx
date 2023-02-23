import { FC } from "react";
import { Col, Image } from "react-bootstrap";
import cloud from "../assets/cloud.png";

const HeaderData: FC = (): JSX.Element => {
  return (
    <>
      <Col xs={6}>
        <div className="border border-end border-info bg-info mt-5">
          <Image src={cloud} />
        </div>
      </Col>
      <Col xs={6}></Col>
    </>
  );
};

export default HeaderData;
