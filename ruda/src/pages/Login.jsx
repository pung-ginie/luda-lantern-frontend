import React, { useState } from "react";
//import {Link, Container, Grid, Typography, TextField, Button} from "@mui/material";
import {signin} from "../service/ApiService";
import "../styles/Login.css"



function Login(){
    //const [user, setUser] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        //const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
    

        //apiService의 signin 메서드를 사용해 로그인
        signin({ email: email, password: password });
    };

    return(
    <div className="login-page">
        <div className="background"/>
        <div className="title">
            <div className="info-message">
                <div className="div7" > 본 계정은 풍등을 보관하고 공유하는 목적으로 사용됩니다.</div>
            </div>
            <div className="title-message">루다의 소원등</div>
        </div>
        <div className="login-form">
            <div className="login-box" />
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                { /* subit 버튼을 누르면 handlesubmit이 실행됨 */}
                <div className="email1">
                  <input className="email2"
                   id="email"
                   label="이메일 주소"
                   name="email"
                   autoComplete="Email"
                  />
                  <div className="password-box1" />
                </div>
                <div className="password1">
                    <div className="password-box1" />
                    <input className="password2"
                     name="password"
                     label="패스워드"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                    />
                 </div>
                 <button className="login">
                     <div className="button1" type="submit" />
                    <div className="div10">로그인</div>
                 </button>
                 <div className="signup1">
                    <div className="signup-btn">
                    <div className="button2" />
                    <div className="div11">회원가입</div>
                 </div>
                 </div>
                
            </form>
        </div>
        

    </div>
        
    );
}

export default Login;

