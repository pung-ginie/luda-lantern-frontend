import React from "react";
import {useState, useEffect, useMemo, useSelector} from 'react';
import {throttle} from 'lodash';
import { useRef } from "react";
import "../styles/FlyLantern.css";
import { css, keyframes } from '@emotion/react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion"


function FlyLantern() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  

  return (
    <div>
      <div className={scrollPosition > 100 ? "scroll-text" : "scrolled-text"}>스크롤되면 색이 변합니다!</div>
    </div>
    
    
    
  );
}
export default FlyLantern;