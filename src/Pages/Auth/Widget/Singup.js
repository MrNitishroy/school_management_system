import { Col, Row, Input, Tooltip, Checkbox } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

function Singup({ toggelAuth }) {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <Input
        className="TextFeild"
        placeholder="Enter Email"
        prefix={<UserOutlined className="site-form-item-icon" />}
      />
      <Input
        className="TextFeild"
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
      />
      <Input
        className="TextFeild"
        placeholder="Enter password"
        prefix={<LockOutlined className="site-form-item-icon" />}
      />
      <br />
      <br />
      <Row style={{ justifyContent: "space-between" }}>
        <Checkbox onChange={onChange}>Remember me</Checkbox>
        <p style={{ color: "red" }}>Forgot password ?</p>
      </Row>
      <br />
      <button className="primaryButton">
        Create Account
      </button>
      <button onClick={toggelAuth} className="secondaryButton">
        Login
      </button>
    </>
  );
}

export default Singup;
