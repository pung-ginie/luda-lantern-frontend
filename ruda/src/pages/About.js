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

  const handleMylantern = () => {
    axios.get('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/lantern/my-lantern')
    .then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    })
  }

  const seeOtherWish = () => {
    setLength(length - 1);
    console.log(length);

    setWish({
      wish : alldata[length].wish
    })

    if(length === 0){
      setLength(originLength);
    }
  }


  return <div className="bg_wrapper">
    <div className="bg">
    <div>
      <button className="wish_button" onClick={seeOtherWish} placeholder="다른 소원 구경하기">{wish.wish}</button>
    </div>
    <img className="lanternA_bg" alt="lanternA_bg" src="img/lanternA_bg.png" />
    <img className="lanternB_bg" alt="lanternB_bg" src="img/lanternB_bg.png" />
    <img className="lanternC_bg" alt="lanternC_bg" src="img/lanternC_bg.png" />
    <div>
    </div>
    <button className="wish_button" onClick={handleMylantern}>나의 풍등 찾기</button>
    </div>
    </div>
}

export default About;
