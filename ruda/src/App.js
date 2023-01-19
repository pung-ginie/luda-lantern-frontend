import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import ChooseLantern from "./pages/ChooseLantern";
import MakeWish from "./pages/MakeWish";
import FlyLantern from "./pages/FlyLantern";
import Info from "./pages/Info";
import "./App.css";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/chooselantern" component={ChooseLantern}/>
          <Route path="/makeWish" component={MakeWish}/>
          <Route path="/flylantern" component={FlyLantern}/>
          <Route path="/info" component={Info}/>
        </Switch>
    </Router>
  );
}

export default App;
