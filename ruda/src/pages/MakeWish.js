import React from "react";
import "../styles/MakeWish.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import FlyLantern from "./FlyLantern";
function MakeWish() {
  return (
    <>
    <div className="wrapper_wish">
        <h2>소원적기</h2>
        <p>종이에 소원을 적어보세요</p>
        <textarea className="materialize-textarea"
          placeholder="소원을 적으면 소원이 이루어집니다."></textarea>
          <div className="button_wrapper">
            <Link to="/flyLantern"><button className="wish_button">완료하기</button></Link>
          </div>
          
    </div>
    </>
  );
}

export default MakeWish;
