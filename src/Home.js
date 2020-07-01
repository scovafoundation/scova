import React from "react";
import logo from "./logo.png";
import "./Home.css";
// import Parallax from "./components/Parallax/Parallax.js";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  return (
    <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
        <p><br/><br/><br/>Mission: Collective Nirvana</p>
</div>

      
      
  );
}

export default Home;
