import React from "react"

export default function BookingForm() {
  const handleSubmit = function () {}

  return (
    <div
      style={{
        marginTop: "50px",
        position: "relative",
        left: "31%",
        width: "650px",
        height: "50%",
        borderRadius: "20px",
        fontSize: "16px",
        color: "#495e57",
        fontWeight: "bold",
        border: "0.1px solid #495e57",
      }}
    >
      <h2 style={{ color: "#495e57" }}>Booking Form</h2>
      <form
        style={{ marginTop: "25px", marginLeft: "2px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <br />
        <input
          type="date"
          id="res-date"
          style={{
            marginLeft: "20px",
            height: "25px",
            width: "250px",
            marginTop: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        />
        <br />
        <div
          style={{
            position: "absolute",
            marginLeft: "350px",
            marginTop: "30px",
            left: "1%",
          }}
        >
          <button
            style={{
              width: "135px",
              height: "35px",
              padding: "0",
              backgroundColor: "#F4CE14",
              borderRadius: "8px",
              marginLeft: "100px",
              marginTop: "20px",
            }}
            type="submit"
          >
            Make a reservation
          </button>
        </div>
        <label htmlFor="res-time" style={{ marginTop: "30px" }}>
          Choose time
        </label>
        <br />
        <select
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            height: "35px",
            width: "250px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          id="res-time "
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <br />
        <label htmlFor="guests">Number of guests</label> <br />
        <input
          style={{
            marginLeft: "20px",
            height: "30px",
            width: "250px",
            borderRadius: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        ></input>
        <br />
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          style={{
            marginLeft: "20px",
            height: "35px",
            width: "255px",
            borderRadius: "10px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </form>
    </div>
  )
}
