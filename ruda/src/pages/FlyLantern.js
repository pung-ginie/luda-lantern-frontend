import React from "react";
import {useState, useEffect, useMemo, useSelector} from 'react';
import {throttle} from 'lodash';
import { useRef } from "react";
import "../styles/FlyLantern.css";
import { css, keyframes } from '@emotion/react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion"


function ChooseLantern() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  
    // const boxRef = useRef<HTMLDivElement>(null);
    // const replies = [
    //     {
    //       id: '1',
    //       photo: 'img/lanternAfly.png',
    //     },
    //     {
    //       id: '2',
    //       photo: '🐱',
    //     },
    //     {
    //       id: '3',
    //       photo: '🐰',
    //     },
    //   ];
    // const boxRef = useRef(null);
  return (
    <>
    {/* <div className="wrap">
    <img className="flyLantern1" alt="flyLantern1" src="img/fly_lantern1.png" />
      <div className="box" ref={boxRef}>
        <motion.img
          className="lanternAfly"
          src={"img/lanternAfly.png"}
          drag
          dragDirectionLock
          dragConstraints={boxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        />
      </div>
    </div> */}
    <div className={scrollPosition > 1000 ? "scroll-text" : "scrolled-text"}>스크롤되면 색이 변합니다!</div>
    </>
  );
}
export default ChooseLantern;