import React from "react";
import { useRef } from "react";
import "./FlyLantern.css";
import { css, keyframes } from '@emotion/react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion"
function ChooseLantern() {
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
    const boxRef = useRef(null);
  return (
    <>
    <div className="wrap">
    {/* <img className="lanternAfly" alt="lanternAfly" src="img/lanternAfly.png" ref={boxRef} /> */}
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
    </div>
    </>
  );
}
export default ChooseLantern;