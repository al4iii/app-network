import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

type PropsType = {};

const Setting: React.FC<PropsType> = () => {
  return (
    <Row>
      <Col span={23} >
      <Title level={3}>Setting</Title>
        <p>This section is under construction.</p>
      </Col>
    </Row>
  );
};

export default Setting;
