import { Col, Row, Input, Tooltip,Checkbox } from "antd";
import logo from "../../Assets/Icons/blackLofo.png";
import { InfoCircleOutlined, UserOutlined ,LockOutlined } from "@ant-design/icons";
import "./AuthPage.css";
import Login from "./Widget/Login";
import Singup from "./Widget/Singup";
import { useState } from "react";
function AuthPage() {
   
    const [isLogin, setIsLogin] = useState(true); 
    const toggelAuth =()=> {
        setIsLogin(!isLogin);
    }
  return (
    <Col className="AuthPage">
      <Row style={{ justifyContent: "center" }}>
        <div className="AuthBox">
          <Row style={{ justifyContent: "center" }}>
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </Row>
          <br />
          <Row style={{ justifyContent: "center" }}>
            <p className="heading1">Login With Credencial</p>
          </Row>
          <p style={{ textAlign: "center" }} className="lable">
            You have to login or signup with you details that is able you to do
            any task inside the system{" "}
          </p>
          <br />
          <br />
            {isLogin ? <Login toggelAuth={toggelAuth} /> : <Singup toggelAuth={toggelAuth} />}
        
       
        </div>
      </Row>
    </Col>
  );
}

export default AuthPage;
