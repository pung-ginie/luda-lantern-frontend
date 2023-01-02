import React from "react";
import "./ChooseLantern.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
function ChooseLantern() {
  return (
    <>
    <div className="wrapperr">
        <h2>풍등고르기</h2>
        <p>원하는 풍등 디자인을 선택하세요</p>
        <div className="lantern_wrapper">
          <img className="lanternA" alt="lanternA" src="img/lanternA.png" tabindex="0" />
          <img className="lanternB" alt="lanternB" src="img/lanternB.png" tabindex="1"/>
          <img className="lanternC" alt="lanternC" src="img/lanternC.png" tabindex="2"/>
          <Link to="/makewish">
          <button className="choose_button">선택하기</button>
          </Link>
        </div>
    </div>
    </>
  );
}

export default ChooseLantern;