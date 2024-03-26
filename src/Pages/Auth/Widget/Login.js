import { Col, Row, Input, Tooltip, Checkbox } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Login({ toggelAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameStatus, setUserNameStatus] = useState("none");
  const [passwordStatus, setpasswordStatus] = useState("none");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    validate();
    setUserNameStatus("none");
    setpasswordStatus("none");
    setErrorMessage("");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setUserNameStatus("none");
    setpasswordStatus("none");
    setErrorMessage("");
    validate();
  };
  const validate = () => {
    if (username != "" && password != "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const onChangeRememberMe = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onLogin = async () => {
    try {
      if (username != "" && password != "") {
        var reponse = await fetch("https://localhost:7281/api/User/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: username,
            password: password,
          }),
        });
        var data = await reponse.json();
      }
      console.log(data);
      if (data.isSuccess) {
        console.log("Login Success");
      } else {
        setUserNameStatus("error");
        setpasswordStatus("error");
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Input
        className="TextFeild"
        status={userNameStatus}
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className="TextFeild"
        status={passwordStatus}
        placeholder="Enter password"
        prefix={<LockOutlined className="site-form-item-icon" />}
        onChange={onChangePassword}
        value={password}
      />
      <br />
      <Row style={{ justifyContent: "space-between" }}>
        <Checkbox onChange={onChangeRememberMe}>Remember me</Checkbox>
        <p style={{ color: "red" }}>Forgot password ?</p>
      </Row>
      {errorMessage == "" ? null : (
        <Row style={{ justifyContent: "center" }}>
          <div className="errorMessage">{errorMessage}</div>
        </Row>
      )}
      <button
        disabled={!isValid}
        style={{ backgroundColor: isValid ? "blue" : "grey" }}
        className="primaryButton"
        onClick={onLogin}
      >
        Login
      </button>
      <button onClick={toggelAuth} className="secondaryButton">
        Create Account
      </button>
    </>
  );
}

export default Login;
