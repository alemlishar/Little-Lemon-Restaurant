import React, { Component } from "react"

export default function SpecialFood(props) {
  return (
    <div
      style={{
        width: "200px",
        float: "left",
        border: "1px solid #EDEfEE",
        left: "50%",
        height: "350px",
        marginTop: "20px",
        backgroundColor: "#EDEfEE",
      }}
    >
      <img
        src={greekSalad}
        width="200px"
        height="160px"
        alt=""
        borderRadius="10px"
      ></img>
      <span
        style={{
          display: "inline-flex",
          marginTop: "10px",
          marginRight: "2px",
        }}
      >
        <p
          style={{
            marginLeft: "10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Greek Salad
        </p>
        <p
          style={{
            marginLeft: "50px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#EE9972",
          }}
        >
          $12.99
        </p>
      </span>
      <p
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          marginRight: "5px",
          fontSize: "10px",
        }}
      >
        The famous greek salad of crispy lettuce, peppers, olives and our
        chicago stylefeta cheese garnished with crunchy garlic and rosemary
        croutons
      </p>
      <p
        style={{
          marginTop: "45px",
          marginLeft: "10px",
          marginRight: "5px",
          fontSize: "10px",
          fontWeight: "bold",
        }}
      >
        Order a delivery
      </p>
    </div>
  )
}
