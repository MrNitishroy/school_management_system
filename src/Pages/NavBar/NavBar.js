import { Row } from "antd";
import logo  from "../../Assets/Icons/whiteLogo.png"
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Row className="navbox" style={{justifyContent:"space-between"}}>
      
      <img src={logo} alt="logo" className="mainlogo" />
      <ul className="menubox">
     <Link to="/" >  <li className="menu">Home</li></Link>
     <Link to="/home" >  <li className="menu">About</li></Link>
     <Link to="/home" >  <li className="menu">Work</li></Link>
     <Link to="/home" >  <li className="menu">Contact</li></Link>
     <Link to="/auth" >  <li className="menu">Login</li></Link>
       
   
      </ul>
    </Row>
  );
}

export default NavBar;
