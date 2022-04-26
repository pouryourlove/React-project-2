import React from "react";
import HeroPic from "../images/hero-pic.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img src={HeroPic} alt="hero" className="hero-pic" />;
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
