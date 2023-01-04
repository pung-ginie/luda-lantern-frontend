import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import About from "./pages/About";
import ChooseLantern from "./pages/ChooseLantern";
import MakeWish from "./pages/MakeWish";
import FlyLantern from "./pages/FlyLantern";
import "./App.css";

function Copyright() {
  return (
      <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          pungginie, {new Date().getFullYear()}
          {"."}
      </Typography>
  );
}
function App() {
  return (
  <div>
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
    <footer>
     <Box mt={5} className="copyright">
         <Copyright />
     </Box>
    </footer>
 </div>

  );
}

export default App;
