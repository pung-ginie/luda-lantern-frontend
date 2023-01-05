import React from "react";
import "./Info.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
function Info() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
      <div className="ruda_wrapper">
        <img className="rudaImage" alt="rudaImage" src="img/ruda.png" />
        {/* <img className="rudaLogo" alt="rudaLogo" src="img/ruda_logo.png" />
        <img className="rudaName" alt="rudaName" src="img/ruda_name.png" />
        <p>루다는 후드티를 쓰고 있는 흑토끼입니다.
달에서 지구로 왔지만 추위를 잘 타 사람의 후드티를 빌려 입고 다닙니다. 후드티가 너무 커서 모자부분은 매듭으로 묶었답니다. 달에 사는 가족들이 그리워 풍등에 편지를 적어 올리려고 합니다. 루다가 띄운 풍등이 달까지 갈 수 있을까요?</p> */}
      </div>
      <div className="ruda_info_wrapper">
      <img className="rudaLogo" alt="rudaLogo" src="img/ruda_logo.png" />
        <img className="rudaName" alt="rudaName" src="img/ruda_name.png" />
        <p>루다는 후드티를 쓰고 있는 흑토끼입니다.<br/>
달에서 지구로 왔지만 추위를 잘 타 사람의 후드티를 빌려 입고 <br/>다닙니다. 후드티가 너무 커서 모자부분은 매듭으로 묶었답니다. <br/>달에 사는 가족들이 그리워 풍등에 편지를 적어 올리려고 합니다.<br/> 루다가 띄운 풍등이 달까지 갈 수 있을까요?</p>
        <Link to="/">
          <button className="home_button">홈으로 돌아가기</button>
        </Link>
      </div>
      </>
    );
  }
  
  export default Info;
  