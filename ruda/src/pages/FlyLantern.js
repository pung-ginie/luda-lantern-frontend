import React from "react";
import {useState, useEffect, useMemo, useSelector} from 'react';
import {throttle} from 'lodash';
import { useRef } from "react";
import "../styles/FlyLantern.css";
import { css, keyframes } from '@emotion/react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion"



function FlyLantern() {
  const ludaImg = [
    {id:1, image:'img/fly_lantern1.PNG', title:'루다1'},
    {id:2, image:'img/fly_lantern_mone.png', title:'루다2'}
  ]
  const [luda, setLuda] = useState(ludaImg) 
  const [scrollEvent, setScrollEvent] = useState(false)
  const onScrollFn = useMemo (()=> throttle(()=> {
    if(window.scrollY<10){
      setScrollEvent('img/fly_lantern1.PNG')
    } 
    else if(window.screenY>10){
      if(window.screen<15){
        setScrollEvent('img/fly_lantern_mone.png')

      }
      else{
        setScrollEvent('img/fly_lantern2.PNG')
      }
    
    

    }

  },100),[])
 
  useEffect(()=>{

    window.addEventListener('scroll',onScrollFn)
    return()=>{
      window.removeEventListener('scroll',onScrollFn)
    }
  },[])

  let boxStyle = {
    width: '40%',
    height: '200px',
    fontSize: '30px',
    lineHeight: '200px',
    background: 'black',
    color: 'white',
    textAlign: 'center'
}



return(
    <>
      <div className="fly_lantern">
        
        <img className="flyLanternmv" alt="flyLanternmv" src={scrollEvent}
    
            data-aos="fade-up">


          </img>
          <div className="lanternAfly" alt="lanternAfly">
           
            </div>
            <img className="lantern" alt="lantern" src='img/lanternA.png'/>
        
      </div>
    </>
)
}
export default FlyLantern;