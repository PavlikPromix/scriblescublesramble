'use client'
import React, { useState, useEffect } from "react";
import './style.css'

const CustomCursor = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = { x: e.pageX, y: e.pageY, key: Math.random() };
      setTrails((currentTrails) => [...currentTrails, newTrail]);
      
      
      setTimeout(() => {
        setTrails((currentTrails) => currentTrails.filter(trail => trail.key !== newTrail.key));
      }, 500); 
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          className="cursor-trail"
          key={trail.key}
          style={{ left: trail.x, top: trail.y }}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;