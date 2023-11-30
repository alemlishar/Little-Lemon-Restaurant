import React from "react"
import { useNavigate } from "react-router-dom"

export default function ConfirmedBooking() {
  const navigate = useNavigate()

  function handleButton() {
    navigate(-1)
  }

  return (
    <div>
      <div
        style={{
          position: "relative",
          marginTop: "30px",
          left: "1%",
          marginBottom: "100px",
        }}
      >
        <h1
          style={{
            marginTop: "100px",
            marginLeft: "36%",
          }}
        >
          Booking Confirmed!
        </h1>
        <button
          style={{
            width: "100px",
            height: "30px",
            padding: "0",
            backgroundColor: "#F4CE14",
            borderRadius: "8px",
            marginLeft: "42%",
            marginTop: "10px",
          }}
          type="submit"
          onClick={handleButton}
        >
          Go back
        </button>
      </div>
    </div>
  )
}
