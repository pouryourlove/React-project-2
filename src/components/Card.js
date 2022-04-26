import React from "react";

import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="swimmer" className="card-image" />
      <div className="card--stats">
        <img src={Star} alt="star" className="cadr-star" />
        <span>{props.rate}</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p className="card-text">{props.text}</p>
      <p>
        <span className="bold">{props.price}</span> / person
      </p>
    </div>
  );
}
