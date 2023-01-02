import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./signUp";
import Home from "./Home";
import About from "./About";
import ChooseLantern from "./ChooseLantern";
import MakeWish from "./MakeWish";
import FlyLantern from "./FlyLantern";
import "./App.css";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={About} />
          <Route path="/chooselantern" component={ChooseLantern}/>
          <Route path="/makeWish" component={MakeWish}/>
          <Route path="/flylantern" component={FlyLantern}/>
        </Switch>
    </Router>
  );
}

export default App;
