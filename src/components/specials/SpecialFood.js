import React, { Component } from "react"
import "../../assets/style.css"

export default function SpecialFood({ image, title, description, price }) {
  const order = "order Delivery"
  return (
    <div
      style={{
        width: "200px",
        float: "left",
        border: "1px solid #EDEfEE",
        marginTop: "20px",
        marginLeft: "15px",
        backgroundColor: "#EDEfEE",
        position: "relative",
      }}
    >
      <img
        src={image}
        width="200px"
        height="160px"
        alt=""
        borderradius="10px"
      ></img>
      <span
        style={{
          display: "inline-flex",
          marginTop: "10px",
          marginRight: "2px",
        }}
      >
        <p className="special-food-title">{title}</p>
        <p className="special-food-price">{price}</p>
      </span>
      <p className="special-food-description">{description}</p>
      <p className="special-food-order">{order}</p>
    </div>
  )
}
