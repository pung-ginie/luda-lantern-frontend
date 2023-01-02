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
    {/* <div className="fly_wrapper">
       <img className="flyLantern1" alt="flyLantern1" src="img/fly_lantern1.png" />
       <img className="lantern1" alt="lanternA" src="img/lanternA.png" css = {lanternStyle}/>
    </div> */}
    <div className="wrap">
    {/* <img className="lanternAfly" alt="lanternAfly" src="img/lanternAfly.png" ref={boxRef} /> */}
    <img className="flyLantern1" alt="flyLantern1" src="img/fly_lantern1.png" />
      <div className="box" ref={boxRef}>
        <motion.img
          className="lanternAfly"
          src={"https://img.lovepik.com/free-png/20211226/lovepik-auspicious-lantern-decoration-png-image_400489436_wh300.png"}
          drag
        //   top={50}
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
// const floating = keyframes`
//     0 {
//         transform: translateY(0);    
//     }
//     50% {
//         transform: translateY(-15px);
//     }
//     100% {
//         transform: translateY(0);
//     }
//     `
// const lanternStyle = css`
//     animation: ${floating} 2s ease infinite;
//     width : 100px;
//     height : 100px;
//     position: absolute;
//     bottom: 33%;
//     right: 47.7%;
//     z-index: 9;
// `
export default ChooseLantern;