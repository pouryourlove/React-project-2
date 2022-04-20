import React from "react";
import HeroPic from "../hero-pic.png";

export default function Hero() {
  return (
    <div className="hero-section">
      <img src={HeroPic} alt="hero" className="hero-pic" />;
    </div>
  );
}
