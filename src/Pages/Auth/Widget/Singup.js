import { Col, Row, Input, Tooltip, Checkbox } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Singup({ toggelAuth }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onValidate = () => {
    if (email != "" && username != "" && password != "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    onValidate();
    setErrorMessage("");
  };
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    onValidate();
    setErrorMessage("");
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    onValidate();
    setErrorMessage("");
  };
  const onSignup = async () => {
    try {
      if (username != "" && password != "" && email != "") {
        var reponse = await fetch("https://localhost:7281/api/User", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: username,
            email: email,
            name: "",
            password: password,
          }),
        });
        console.log(email, username, password);
        var data = await reponse.json();
      }
      console.log(data);
      if (data.status == 200) {
        console.log("Signup");
      } else {
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
        placeholder="Enter Email"
        onChange={onEmailChange}
        prefix={<UserOutlined className="site-form-item-icon" />}
      />
      <Input
        className="TextFeild"
        placeholder="Enter your username"
        onChange={onUsernameChange}
        prefix={<UserOutlined className="site-form-item-icon" />}
      />
      <Input
        className="TextFeild"
        placeholder="Enter password"
        onChange={onPasswordChange}
        prefix={<LockOutlined className="site-form-item-icon" />}
      />
      <br />
      <br />
      <Row style={{ justifyContent: "space-between" }}>
        <Checkbox onChange={onChange}>Remember me</Checkbox>
        <p style={{ color: "red" }}>Forgot password ?</p>
      </Row>
      <br />
      {errorMessage == "" ? null : (
        <Row style={{ justifyContent: "center" }}>
          <div className="errorMessage">{errorMessage}</div>
        </Row>
      )}
      <button
        className="primaryButton"
        disabled={!isValid}
        onClick={onSignup}
        style={{ backgroundColor: isValid ? "blue" : "grey" }}
      >
        Create Account
      </button>
      <button onClick={toggelAuth} className="secondaryButton">
        Login
      </button>
    </>
  );
}

export default Singup;
