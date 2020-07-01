import React from "react";
import logo from "./logo.png";
import "./App.css";
import "./Chapters.css";
// import Parallax from "./components/Parallax/Parallax.js";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Table
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookPlayer from 'react-facebook-player';

import {verses, onboarding } from './Scova';

function App() {
  const versesNumbered = verses.map((verse, index) => 
  <tr>
    <td colSpan="8" style={{fontWeight: "bolder", textAlign:"left"}}>
      {index+1}
    </td>
    <td colSpan="42" className={verse.classes} id={index+1}>
      {verse.html}
    </td>
    </tr>
  );

  const onboardingFormatted = onboarding.map((verse, index) => 
  <p className={verse.classes}>
    <br/><br/>{verse.html}<br/>
  </p>
  );


  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />


        {onboardingFormatted}
        <table>
          {versesNumbered}
        </table>


      </div>
      
  );
}

export default App;
