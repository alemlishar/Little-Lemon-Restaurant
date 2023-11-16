import React, { useReducer, useState } from "react"
import logo from "./../assets/restauranfood.jpg"

const bookingTimeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const reducer = (state, action) => {
  if (action.type === "updateTime") return bookingTimeSlots
  if (action.type === "initializeTime") return []
  return state
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, [])

  function updateTimes(date) {
    return dispatch({ type: "updateTime" })
  }

  function initializeTimes() {
    return dispatch({ type: "initializeTime" })
  }

  return (
    <div
      style={{
        border: "2px",
        backgroundColor: "#495e57",
        height: "200px",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", left: "31%" }}>
        <p
          style={{
            fontSize: "18px",
            color: "#F4CE14",
            marginBottom: "2px",
          }}
        >
          Little Lemmon
        </p>
        <p
          style={{
            padding: "0",
            marginBottom: "1px",
            fontSize: "16px",
            color: "white",
          }}
        >
          Chicago
        </p>
        <h6
          style={{
            color: "white",
            fontSize: "10px",
            maxWidth: "22ch",
            padding: "0",
            marginBottom: "8px",
          }}
        >
          We are family owned Meditrannean restaurant, focus on traditional
          recipes served with a modern twist.
        </h6>
        <button
          style={{
            width: "120px",
            height: "30px",
            padding: "0",
            backgroundColor: "#F4CE14",
            borderradius: "10px",
          }}
        >
          Reserve a Table
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "20px",
          left: "61%",
          borderradius: "15px",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <img src={logo} width="190px" height="220px" alt="hey"></img>
      </div>
    </div>
  )
}
