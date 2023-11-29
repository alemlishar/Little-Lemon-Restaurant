import React, { useState } from "react"
import useScript from "../assets/UseScripts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFontAwesome } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faInfo, faCoffee } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faInfo, faCoffee)

const websiteFilterFiedsOptions = [
  { value: "", label: "Search and select website activity" },
  {
    value: "page_visited",
    label: (
      <>
        <span style={{ paddingRight: "5px" }}>Page Visited</span>
        <FontAwesomeIcon icon="info" title={"Page Visited Option"} />
      </>
    ),
  },
  { value: "form_submitted", label: "Form Submitted" },
]

export default function BookingForm({
  submitForm,
  availableTime,
  initializeTime,
  updateTime,
}) {
  const [loaded, error] = useScript(
    "https://raw.githubusercontent.com/rofinn/ll-frontend-capstone/main/src/api.js"
  )

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
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 950px)").matches
  )
  React.useEffect(() => {
    setBookData({
      ...bookData,
      bookingTime: availableTime.timeValue[0],
    })
    timeValidation(availableTime.timeValue[0])
  }, [availableTime])

  React.useEffect(() => {
    window.matchMedia("(min-width: 950px)").addEventListener("change", (e) => {
      setMatches(e.matches)
    })

    initializeTime()
    setBookData({
      ...bookData,
      bookingDate: availableTime.date,
      bookingTime: availableTime.timeValue[0],
    })
    DateValidation(availableTime.date)
    timeValidation(availableTime.timeValue[0])
    return () => {
      window
        .matchMedia("(min-width: 950px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const a = submitForm(bookData)
    console.log(a)
  }

  const DateValidation = (value) => {
    let errorMessage
    if (value) {
      errorMessage = ""
    } else {
      errorMessage = "Invalid date"
    }
    setErrors({
      ...errors,
      bookingDate: errorMessage,
    })
  }

  const timeValidation = (value) => {
    let errorMessage
    if (value === "No available time") errorMessage = "Reserve on other day"
    else errorMessage = ""

    setErrors({
      ...errors,
      bookingTime: errorMessage,
    })
  }

  const guestNumberValidation = (value) => {
    let errorMessage
    if (value === 0) errorMessage = "Atleast 1 guest required"
    else errorMessage = ""

    setErrors({
      ...errors,
      numberOfGuest: errorMessage,
    })
  }

  const ocassionValidation = (value) => {
    let errorMessage
    if (value === "occassion") errorMessage = "Specify ocassion type"
    else errorMessage = ""
    setErrors({
      ...errors,
      occasion: errorMessage,
    })
  }

  async function handleDate(e) {
    setBookData({
      ...bookData,
      bookingDate: e.target.value,
    })
    if (e.target.value) {
      updateTime(e.target.value)
    }
    DateValidation(e.target.value)
  }

  function handleTime(e) {
    setBookData({
      ...bookData,
      bookingTime: e.target.value,
    })
    timeValidation(e.target.value)
  }

  function handleOcassion(e) {
    setBookData({
      ...bookData,
      occasion: e.target.value,
    })
    ocassionValidation(e.target.value)
  }

  function handleNumGuest(e) {
    setBookData({
      ...bookData,
      numberOfGuest: e.target.value,
    })
    guestNumberValidation(e.target.value)
  }

  return (
    <div
      className="booking-form-container"
      style={{ width: matches ? "650px" : "330px" }}
    >
      <h2
        style={{ marginTop: "20px", color: "#495e57", margFontinLeft: "5px" }}
      >
        Booking Table Form
      </h2>

      <form
        data-testid="formbook"
        onSubmit={handleSubmit}
        style={{ marginLeft: "15px" }}
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
        {matches ? (
          <div className="booking-button-container">
            <button
              style={{ marginLeft: matches ? "115px" : "0px" }}
              className="booking-form-button"
              type="submit"
              disabled={
                bookData.bookingDate === "" ||
                bookData.bookingTime === "No available time" ||
                bookData.numberOfGuest === 0 ||
                bookData.occasion === "occassion" ||
                bookData.occasion === ""
              }
            >
              Make a reservation
            </button>
          </div>
        ) : null}
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
          {availableTime?.timeValue?.map((time, index) => {
            return (
              <option key={time} value={time} name={time}>
                {time}
              </option>
            )
          })}
        </select>
        {errors.bookingTime ? (
          <div
            style={{
              display: matches ? "inline" : "block",
              color: "red",
              marginLeft: "10px",
            }}
          >
            {errors.bookingTime}
          </div>
        ) : null}
        <br />
        <label htmlFor="guests">Number of guests</label> <br />
        <input
          className="booking-form-input"
          data-testid="bookingGuest"
          placeholder="1"
          min={1}
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
          data-testid="occasion"
          id="occasion"
          value={bookData.occasion}
          name="occasion"
          onChange={handleOcassion}
        >
          <option value="occassion" name="select" FontAwesomeIcon>
            --Occasion--
          </option>
          <option value="Birthday" name="birthday">
            Birthday
          </option>
          <option value="Anniversary" name="anniversary">
            Anniversary
          </option>
        </select>
        {errors.occasion ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {errors.occasion}
          </div>
        ) : null}
        <br />
        <br />
        {!matches ? (
          <button
            style={{ marginLeft: !matches ? "90px" : "0px" }}
            className="booking-form-button"
            type="submit"
            disabled={
              bookData.bookingDate === "" ||
              bookData.bookingTime === "No available time" ||
              bookData.numberOfGuest === 0 ||
              bookData.occasion === "occassion" ||
              bookData.occasion === ""
            }
          >
            Make a reservation
          </button>
        ) : null}
      </form>
    </div>
  )
}
