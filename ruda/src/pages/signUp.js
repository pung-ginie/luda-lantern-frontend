import React, { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";
const SignUp = ({onCreate}) =>  {

  const [userInfo, setState] = useState({
    username : "",
    email : "",
    password : "",
    confirm_password : "",
  });

  const handleLogin = (e) => {
    setState({
      ...userInfo,
      [e.target.name] : e.target.value,
    });
  };

  const handleSignUp = (e)=> {

    if(userInfo.password !== userInfo.confirm_password){
      return alert("비밀번호를 확인해주세요!");
    }
    onCreate(userInfo.username, userInfo.email, userInfo.password);
    alert("complete");
    console.log(userInfo);
  axios.post('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/auth/signup/', {
    username : userInfo.username,
    email : userInfo.email,
    password : userInfo.password,
  }).then(function(response){
    console.log(response);
    document.location.href = "/signin";
  }).catch(function(error){
    console.log(error);
  });

    setState({
        username: "",
        email : "",
        password : "",
        confirm_password : "",
    });
};

    return <div className="sign_wrapper">
          <h2>회원가입</h2>
          <p>본 계정은 풍등을 보관하고 공유하는 목적으로 사용됩니다.</p>
          <div className="form-control2">
          <div>
            <input type="input" name="username" value={userInfo.username} className="name" 
            placeholder="Enter name" onChange={handleLogin} />
          </div>
          <div>
            <input type="email" name="email" value={userInfo.id} className="email" 
            placeholder="Enter email" onChange={handleLogin} />
          </div>
          <div>
            <input type="password" name="password" value={userInfo.password} className="password" 
            placeholder="Enter password" onChange={handleLogin} />
          </div>
          <div>
            <input type="password" name="confirm_password" value={userInfo.confirm_password} className="password" 
            placeholder="다시 한번 더 입력해주세요" onChange={handleLogin} />
          </div>
          <div>
          <button className="signin_buttons" onClick={handleSignUp}>가입하기</button>
          <p className="signin">이미 계정이 있습니까?</p><Link to="/signin" style={{ textDecoration: 'none' }}>
          <p className="signin">로그인하기</p>
          </Link>
          </div>
          </div>
    </div>
  }
  export default SignUp;