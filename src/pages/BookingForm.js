import React, { useState } from "react"

const bookingTimeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

export default function BookingForm() {
  const [bookData, setBookData] = useState({
    bookingDate: "",
    bookingTime: "",
    numberOfGuest: "",
    occasion: "",
  })
  const [isActive, setActive] = useState(false)

  function handleDate(e) {
    setBookData({
      ...bookData,
      bookingDate: e.target.value,
    })
  }

  function handleTime(e) {
    setBookData({
      ...bookData,
      bookingTime: e.target.value,
    })
  }

  function handleOcassion(e) {
    setBookData({
      ...bookData,
      occasion: e.target.value,
    })
  }
  function handleNumGuest(e) {
    setBookData({
      ...bookData,
      numberOfGuest: e.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }
  const bookingTimeOptions = bookingTimeSlots.map((time, index) => {
    return (
      <option key={time} value={time}>
        {time}
      </option>
    )
  })

  return (
    <div
      style={{
        marginTop: "50px",
        position: "relative",
        left: "31%",
        width: "650px",
        height: "100%",
        borderRadius: "5px",
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
          value={bookData.bookingDate}
          name="bookingDate"
          onChange={handleDate}
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
            disabled={isActive}
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
          id="res-time"
          value={bookData.bookingTime}
          name="bookingTime"
          onChange={handleTime}
        >
          {bookingTimeOptions}
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
          placeholder="1"
          type="number"
          value={bookData.numberOfGuest}
          name="numberOfGuest"
          id="guests"
          onChange={handleNumGuest}
        />
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
          value={bookData.occasion}
          name="occasion"
          onChange={handleOcassion}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </form>
    </div>
  )
}
