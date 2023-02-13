import React, {useState} from "react";
import "../styles/ChooseLantern.css";
import { Link, Route, Switch, useLocation, BrowserRouter as Router } from "react-router-dom";
const ChooseLantern = () => {

  const location = useLocation();
  console.log(location);
  
  const [lanternType, setLantern] = useState("");

  const handleType = (e) => {
    setLantern({
      lanternType : e.target.className,
  });
  };

  return (
    <div className="wrapperr">
      <div id="banner"></div>
        <h2>풍등고르기</h2>
        <p>원하는 풍등 디자인을 선택하세요</p>
        <div className="lantern_wrapper">
          <img className="A" value="lanternA" alt="lanternA" src="img/lanternA.png" tabindex="0" onClick={handleType}/>
          <img className="B" value="lanternB" alt="lanternB" src="img/lanternB.png" tabindex="1" onClick={handleType}/>
          <img className="C" value="lanternC" alt="lanternC" src="img/lanternC.png" tabindex="2" onClick={handleType}/>
        </div>

        <Link to ={{
          pathname : "/makewish",
          state : {
          lanternType : lanternType,
          }
        }}>
          <button className="choose_button">선택하기</button>
        </Link>
    </div>
  );
}

export default ChooseLantern;