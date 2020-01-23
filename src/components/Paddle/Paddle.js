import React, { useEffect, useState } from "react";
import "./Paddle.css";

export default function Paddle() {
  const [paddleX, setPaddleX] = useState(0);
  function handleMouse(e) {
    //console.log(e.x, e.y, e.movementX, e.movementY)
    setPaddleX(e.x);
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
  }, []);
  console.log("Paddle X =>", paddleX);
  return (
    <div
      className="paddle"
      style={{
        left: `${paddleX}px`
        //transform: 'translateX(calc(-50% + ${paddleX}px))
      }}
    />
  );
}
