import React, {useState, useRef, useEffect} from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Home from "./pages/Home";
import About from "./pages/About";
import ChooseLantern from "./pages/ChooseLantern";
import MakeWish from "./pages/MakeWish";
import FlyLantern from "./pages/FlyLantern";
import Info from "./pages/Info";
import "./App.css";
import setAuthToken from "./APIUtils";


function App() {

  setAuthToken(localStorage.jwtToken);

  const [isLogin , setIsLogin] = useState(false);

  function loginCallBack(login){
    setIsLogin(login);
  }
  useEffect(()=> {},[]);

  const [data, setData] = useState([]);

  const onCreate = (lantern_number ,wish, is_public) => {
    const newItem = {
      lantern_number : lantern_number,
      wish: wish, 
      is_public: is_public,
    }
    setData([newItem, ...data]);
  };
  const onSignup = (name, email, password) => {
    const newItem = {
      name: name, 
      email: email,
      password : password,
    }
    setData([newItem, ...data]);
  };


  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" render={(props)=> <SignIn {...props} loginCallBack={loginCallBack}/>} />
          <SignUp path="/signup" onCreate={onSignup} />
          <Route path="/about" component={About} />
          <ChooseLantern path="/chooselantern" />
          <MakeWish path="/makeWish" onCreate={onCreate}/>
          <FlyLantern path="/flylantern/"/>
          <Route path="/info" component={Info}/>
        </Switch>
    </Router>
  );
}

export default App;
