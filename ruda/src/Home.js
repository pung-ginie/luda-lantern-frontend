import React from "react";
import "./Home.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
function Home() {
  return (
    <>
    <div className="wrapper">
      <div className="title"> 루다의 소원등</div>
      <div className="sub_title">
      새로운 시작은 언제나 설렙니다. <br/> 2023년 새해를 맞이하여 소원을 적어 루다와 함께 풍등을 날려보세요.<br/>힘차게 나라오른 풍등이 당신의 소원을 이룰 수 있게 도와줄지도 몰라요.</div>
      <Link to="/signup">
          <button className="start_button">시작하기</button>
        </Link>
        <Link to="/about">
          <button className="next_button">풍등보러가기</button>
        </Link>
      </div>
      <div className="c1image">
        <img className="mainImage" alt="mainImage" src="img/main.png" />
      </div>
    </>
  );
}

export default Home;
