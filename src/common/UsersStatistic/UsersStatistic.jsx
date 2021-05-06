import "antd/dist/antd.css";
import { Statistic, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { selectTotalItemsCount } from "../../redux/profile-selector";

const UsersStatistic = () => {
    const userStatistic = useSelector(selectTotalItemsCount)    
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={userStatistic} />
      </Col>
    </Row>
  );
};

export default UsersStatistic;
