import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import useScript from "../assets/UseScripts"
import { ErrorMessage } from "formik"

const bookingTimeSlots = [
  "00:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]

const availableTimesByDate = {
  "2023-08-29": ["10:00", "11:00", "12:00"],
  "2023-11-01": ["10:00", "11:00", "12:00"],
  "2023-11-02": ["14:00", "15:00", "16:00"],
  "2023-11-03": ["10:00", "11:00", "12:00"],
  "2023-11-04": ["14:00", "15:00", "16:00"],
  "2023-11-05": ["10:00", "11:00", "12:00"],
  "2023-11-06": ["14:00", "15:00", "16:00"],
  "2023-11-07": ["10:00", "11:00", "12:00"],
  "2023-11-08": ["14:00", "15:00", "16:00"],
  "2023-11-09": ["10:00", "11:00", "12:00"],
  "2023-11-10": ["14:00", "15:00", "16:00"],
  "2023-11-11": ["10:00", "11:00", "12:00"],
  "2023-11-12": ["14:00", "15:00", "16:00"],
  "2023-11-13": ["10:00", "11:00", "12:00"],
  "2023-11-14": ["14:00", "15:00", "16:00"],
  "2023-11-15": ["10:00", "11:00", "12:00"],
  "2023-11-16": ["14:00", "15:00", "16:00"],
  "2023-11-17": ["10:00", "11:00", "12:00"],
  "2023-11-18": ["14:00", "15:00", "16:00"],
  "2023-11-19": ["10:00", "11:00", "12:00"],
  "2023-11-20": ["14:00", "15:00", "16:00"],
  "2023-11-21": ["10:00", "11:00", "12:00"],
  "2023-11-22": ["5:00", "15:00", "4:00"],
  "2023-11-23": ["9:00", "8:00", "12:00"],
  "2023-11-24": ["7:00", "4:00", "16:00"],
  "2023-11-25": ["10:00", "11:00", "2:00"],
  "2023-11-26": ["4:00", "5:00", "6:00"],
  "2023-11-27": ["10:00", "11:00", "12:00"],
  "2023-11-28": ["14:00", "15:00", "6:00"],
  "2023-11-29": ["1:00", "12:00", "2:00"],
  "2023-11-30": ["4:00", "5:00", "16:00"],
}
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function BookingForm({ onSubmit }) {
  // const navigate = useNavigate()
  const [loaded, error] = useScript(
    "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
  )

  const [bookTimes, setBookTimes] = useState()

  const [bookData, setBookData] = useState({
    bookingDate: "",
    bookingTime: "",
    numberOfGuest: "",
    occasion: "",
  })
  const [errors, setErrors] = useState({
    bookingDate: "",
    bookingTime: "",
    numberOfGuest: "",
    occasion: "",
  })
  const [isActive, setActive] = useState(false)

  React.useEffect(() => {
    initializeTimes()
  }, [])

  const initializeTimes = () => {
    const date = new Date()
    const today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    const response = fetchApi(today)
    response.then(
      function (value) {
        setBookTimes(value)
        setBookData({
          ...bookData,
          bookingDate: today,
        })
      },
      function (error) {}
    )

    return bookTimes
  }

  const updateTimes = (date) => {
    const response = fetchApi(date)
    response.then(
      function (value) {
        setBookTimes(value)
      },
      function (error) {}
    )
  }

  const fetchApi = async (date) => {
    await wait(2000)
    return new Promise((resolve, reject) => {
      if (availableTimesByDate[date]) resolve(availableTimesByDate[date])
      else reject(new Error("No available times for the selected date."))
    })
  }

  const submitForm = async (formData) => {
    console.log("submitted date:" + formData.bookingDate)
    const randomNumber = Math.random()
    console.log("random Number:" + randomNumber)
    await wait(2000)
    return new Promise((resolve, reject) => {
      if (randomNumber < 0.5) reject(new Error("Form submission failed"))
      else resolve(true)
    })
  }

  const bookingTimeOptions = bookTimes?.map((time, index) => {
    return (
      <option key={time} value={time}>
        {time}
      </option>
    )
  })

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(bookData)
    const response = submitForm(bookData)
    response.then(
      function (value) {
        //navigate("/confirmedbook")
        console.log("clicked")
      },
      function (error) {
        console.log("clicked")
      }
    )
  }

  const DateValidation = (msg) => {
    setErrors({
      ...errors,
      bookingDate: msg,
    })
  }
  const guestNumberValidation = (msg) => {
    setErrors({
      ...errors,
      numberOfGuest: msg,
    })
  }

  const ocassionValidation = (msg) => {
    setErrors({
      ...errors,
      occasion: msg,
    })
  }

  async function handleDate(e) {
    console.log("new date:" + e.target.value)
    let errorMessage
    setBookData({
      ...bookData,
      bookingDate: e.target.value,
    })
    if (e.target.value) {
      errorMessage = ""
      updateTimes(e.target.value)
    } else {
      setBookTimes(bookingTimeSlots)
      errorMessage = "Invalid date"
    }
    DateValidation(errorMessage)
  }

  function handleTime(e) {
    setBookData({
      ...bookData,
      bookingTime: e.target.value,
    })
  }

  function handleOcassion(e) {
    let errorMessage
    setBookData({
      ...bookData,
      occasion: e.target.value,
    })

    if (e.target.value === "select") errorMessage = "Specify ocassion type"
    else errorMessage = ""
    ocassionValidation(errorMessage)
  }

  function handleNumGuest(e) {
    let errorMessage
    setBookData({
      ...bookData,
      numberOfGuest: e.target.value,
    })
    if (e.target.value == 0) errorMessage = "Atleast 1 guest required"
    else errorMessage = ""

    guestNumberValidation(errorMessage)
  }

  return (
    <div className="booking-form-container">
      <h2 style={{ color: "#495e57", marginLeft: "5px" }}>
        Booking Table Form
      </h2>
      <form
        data-testid="formbook"
        onSubmit={handleSubmit}
        style={{ marginTop: "25px", marginLeft: "15px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <br />
        <input
          type="date"
          data-testid="bookingDate"
          id="res-date"
          value={bookData.bookingDate}
          name="bookingDate"
          onChange={handleDate}
          className="booking-form-input"
        />
        {errors.bookingDate ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {errors.bookingDate}
          </div>
        ) : null}
        <br />
        <div className="booking-button-container">
          <button className="booking-form-button" type="submit">
            Make a reservation
          </button>
        </div>
        <label htmlFor="res-time" style={{ marginTop: "30px" }}>
          Choose time
        </label>
        <br />
        <select
          className="booking-time-options"
          data-testid="bookingTime"
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
          className="booking-form-input"
          data-testid="bookingGuest"
          placeholder="0"
          min={0}
          type="number"
          value={bookData.numberOfGuest}
          name="numberOfGuest"
          id="guests"
          onChange={handleNumGuest}
        />
        {errors.numberOfGuest ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {errors.numberOfGuest}
          </div>
        ) : null}
        <br />
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          className="booking-time-options "
          style={{
            height: "35px",
            width: "255px",
          }}
          id="occasion"
          value={bookData.occasion}
          name="occasion"
          onChange={handleOcassion}
        >
          <option value="select">--Select--</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {errors.occasion}
          </div>
        ) : null}
      </form>
    </div>
  )
}
