import React from "react";
import "../styles/About.css"
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import background from "../lantern_bg.png";
function About() {
  return (
    <>
    <div className="bg_wrapper">
    <div className="bg">
    <img className="lanternA_bg" alt="lanternA_bg" src="img/lanternA_bg.png" />
    <img className="lanternB_bg" alt="lanternB_bg" src="img/lanternB_bg.png" />
    <img className="lanternC_bg" alt="lanternC_bg" src="img/lanternC_bg.png" />
    </div>
    </div>
    </>
  );
}

export default About;
