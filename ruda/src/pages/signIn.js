import React, { useState} from "react";
import "../styles/SignIn.css";
import axios from "axios";
import { Link } from "react-router-dom";
import setAuthToken from "../APIUtils";

function SignIn(props) {

  const [userInfo, setState] = useState({
    email : "",
    password : "",
  });

  const handleLogin = (e) => {
    setState({
      ...userInfo,
      [e.target.name] : e.target.value,
    });
  };

  const handleSignin = (e)=> {

  axios.post("http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/auth/signin/" ,JSON.stringify(userInfo), {
    headers: {
      "Content-Type": `application/json`,
    }})
    .then(res =>{
    // console.log("res.data.accessToken : " + res.data);
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
    props.loginCallBack(true);
    alert("complete");
    console.log(res.data);
    localStorage.setItem('jwtToken', res.data.token);
    setAuthToken(res.data.token);
    props.history.push({
        pathname: "/chooselantern",
    });
    })
    .catch(ex=>{
        console.log("login requset fail : " + ex);
    })
    .finally(()=>{console.log("login request end")});

    setState({
        email : "",
        password : ""
    });
}
    return <div className="sign_wrapper">
       <div id="banner"></div>
          <div className="title_wrapper">루다의 소원등</div>
          <p>본 계정은 풍등을 보관하고 공유하는 목적으로 사용됩니다.</p>
          <div className="form-control">
          
            <input type="email" name="email" value={userInfo.id} className="email" 
            placeholder="Enter email" onChange={handleLogin} />
            <input type="password" name="password" value={userInfo.password} className="password" 
            placeholder="Enter password" onChange={handleLogin} />
             <div className="login_btn">
          <button className="wish_buttons" onClick={handleSignin}>로그인!</button>
          <Link to="/signup">
            <button className="signup_buttons">회원가입!</button>
          </Link>
          </div>
          <div>
            
          </div>
         
          </div>
    </div>
  }
  export default SignIn;
