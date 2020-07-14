import React from "react";
import logo from "./logo.png";
import "./App.css";
import "./Chapters.css";
// import Parallax from "./components/Parallax/Parallax.js";
import { Button, Navbar, Nav, Form, FormControl, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookPlayer from "react-facebook-player";
import SpotifyPlayer from 'react-spotify-player';


import { verses, onboarding } from "./Scova";

function App() {
  var vi = 0;
  const versesNumbered = verses.map((verse, index) => {
    if (verse.classes.includes("verse")) {
      vi = vi + 1;
      return (
        <tr>
          
          <td colSpan="42" className={verse.classes} id={vi}>
            {verse.html}
          </td>
          <td colSpan="8" style={{ fontWeight: "bolder", textAlign: "left" , verticalAlign: "middle"}}>
            {vi}
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          
          <td colSpan="42" className={verse.classes}>
            {verse.html}
          </td>
          <td colSpan="8" style={{ fontWeight: "bolder", textAlign: "left"  , verticalAlign: "middle"}}>
            {" "}
          </td>
        </tr>
      );
    }
  });

  const onboardingFormatted = onboarding.map((verse, index) => (
    <p className={verse.classes}>
      <br />
      <br />
      {verse.html}
      <br />
    </p>
  ));

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      {onboardingFormatted}
      <table>{versesNumbered}</table>
    </div>
  );
}

export default App;
