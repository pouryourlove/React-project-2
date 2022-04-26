import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import Swimmer from "./images/swimmer.png";
import Wedding from "./images/wedding.png";
import Bike from "./images/bike.png";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        <Card
          img={Swimmer}
          text="Life lessons with Katie Zaferes"
          rate="5.0"
          price="$136"
        />
        <Card
          img={Wedding}
          text="Learn wedding photography"
          rate="5.0"
          price="$125"
        />
        <Card img={Bike} text="Group Mountain Biking" rate="4.8" price="$50" />
      </div>
    </div>
  );
}
