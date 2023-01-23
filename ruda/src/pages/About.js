import React, {useState, useEffect, useReducer} from "react";
import "../styles/About.css"
import { Link, Route, Switch ,useLocation, BrowserRouter as Router } from "react-router-dom";
import background from "../lantern_bg.png";
import axios, { all } from "axios";

const About = () => {
  const [alldata, setData] = useState([]);
  const [length, setLength] = useState(0); 
  const [originLength , setOriginLength] = useState(0); 
  const [wish, setWish] = useState("");

  const [my_lantern, setMy_Lantern] = useState({
    my_wish : "",
    my_Lnumber : 9,
  });

  const [allmydata, setMyData] = useState([]);
  const [my_originLength , setMy_OriginLength] = useState(-1); 

  useEffect(() => {
    axios.get('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/lantern/all-lantern/')
    .then(response => {
      setData(response.data.data);
      setLength(response.data.data.length - 1);
      setOriginLength(response.data.data.length -1);
    }).catch(function(error){
      console.log(error);
    });
  },[]);


  const handleMylantern = () =>  {
    axios.get('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/lantern/my-lantern/')
    .then(function(response){
      setMyData(response.data.data);
      setMy_OriginLength(response.data.data.length -1);
      console.log(allmydata);
    }).catch(function(error){
      console.log(error);
    })
  }

  const seeOtherWish = () => {
    setLength(length - 1);
    setWish({
      wish : alldata[length].wish
    })
    if(length === 0){
      setLength(originLength);
    }
  }

  const seeMyWish = () => {
    
  }

  return <div className="bg_wrapper">
    <div className="bg">
    <div>
      <button className="wish_button" onClick={seeOtherWish} placeholder="다른 소원 구경하기">{wish.wish}</button>
    </div>
    <img className="lanternA_bg" alt="lanternA_bg" src="img/lanternA_bg.png" />
    <img className="lanternB_bg" alt="lanternB_bg" src="img/lanternB_bg.png" />
    <img className="lanternC_bg" alt="lanternC_bg" src="img/lanternC_bg.png" />

    <button className="wish_btn" onClick={seeMyWish}>
      <img className="mywish" src="img/lanternA.png">
      </img>{my_originLength > -1 ? allmydata[0].wish : ""}</button>
    <button className="wish_btn1" onClick={seeMyWish}>
      <img className="mywish" src="img/lanternB.png">
    </img>{my_originLength > 0 ? allmydata[1].wish : ""}</button>
    <button className="wish_btn2" onClick={seeMyWish}>
      <img className="mywish" src="img/lanternC.png">
    </img>{my_originLength > 1 ? allmydata[2].wish : ""}</button>
    <button className="wish_btn3" onClick={seeMyWish}>
      <img className="mywish" src="img/lanternA.png">
    </img> {my_originLength > 2 ? allmydata[3].wish : ""}</button>
    <button className="wish_btn4" onClick={seeMyWish}>
      <img className="mywish" src="img/lanternB.png">
    </img> {my_originLength > 3 ? allmydata[4].wish : ""}</button>

    <button className="wish_button" onClick={handleMylantern}>나의 풍등 찾기</button>
    </div>
    </div>
}

export default About;
