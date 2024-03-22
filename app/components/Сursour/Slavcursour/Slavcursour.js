'use client'
import React, { useState, useEffect } from "react";
import './style.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y:0});
  const [prevPosition, setPrevPosition]=useState({x: 0, y:0})
  
  useEffect(()=> {
    const updatePosition = (e) => {
      setPrevPosition(position);
      setPosition ({ x: e.clientX , y: e.clientY});
    };
    window.addEventListener('mousemove',updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  },[position]);
  const direction ={
      isMovingLeft: position.x < prev.Position.x,
      isMovingUp: position.y < prevPosition.y,
  }
return (
  <div 
    className="cursor-trail"
    style={{
      left: '${position.x}px',
      top: '${position.y}px',
      transform: 'translate(${direction.isMovingLeft ? '+50%':'-50%'}, ${direction.isMovingUp ? '+50%':'-50%'})', 
    }}></div>
  );
};
export default CustomCursor;
