import { useCallback } from "react";
import "../styles/Login.css";

const LoginError = () => {
  const onLoginBtnContainerClick = useCallback(() => {
    // Please sync "풍등 디자인" to the project
  }, []);

  return (
    <div className="login-error">
      <div className="backgrround" />
      <div className="login-form" />
      <div className="login-btn" onClick={onLoginBtnContainerClick} >
        <div className="btn-text">로그인</div>
      </div>
      <div className="signup-btn">
        <div className="button4" />
        <div className="div26">회원가입</div>
      </div>
      <div className="div27">
        본 계정은 풍등을 보관하고 공유하는 목적으로 사용됩니다.
      </div>
      <div className="div28">{`비밀번호가 다르거나 가입되어 있지 않은 계정입니다. `}</div>
      <div className="div29">루다의 소원등</div>
      <img className="login-error-child" alt="" src="../vector-13.svg" />
      <div className="email">Email</div>
      <div className="password">Password</div>
    </div>
  );
};

export default LoginError;
