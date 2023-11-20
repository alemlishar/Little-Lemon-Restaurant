import React, { useState } from "react"
import * as Yup from "yup"
import { useFormik, Field, Form, Formik, FormikProps } from "formik"
import { useNavigate } from "react-router-dom"
import useScript from "../assets/UseScripts"
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

export default function BookingForm() {
  const navigate = useNavigate()
  const [loaded, error] = useScript(
    "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
  )

  const [bookTimes, setBookTimes] = useState()

  const formik = useFormik({
    initialValues: {
      bookingDate: "",
      bookingTime: "",
      numberOfGuest: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      bookingDate: Yup.string().required("Required"),
      bookingTime: Yup.string().required("Required"),
      numberOfGuest: Yup.number().required("Required").min(1),
      occasion: Yup.string()
        .required("Required")
        .test("len", "please Choose", (val) => val.length !== 6),
    }),
    validateOnBlur: true,
    onSubmit: (values) => {
      const response = submitForm(formik.values)
      response.then(
        function (value) {
          navigate("/confirmedbook")
        },
        function (error) {}
      )
    },
  })

  React.useEffect(() => {
    if (formik.values.bookingDate) {
      updateTimes(formik.values.bookingDate)
    } else initializeTimes()
  }, [formik.values.bookingDate])

  React.useEffect(() => {
    if (!loaded) {
      console.log("not loaded sucessfully")
      return
    } else {
      console.log(useScript.state)
    }
  }, [loaded, error])

  React.useEffect(() => {
    initializeTimes()
  }, [])

  const [isActive, setActive] = useState(false)

  const initializeTimes = () => {
    const date = new Date()
    const today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    const response = fetchApi(today)
    response.then(
      function (value) {
        setBookTimes(value)
        formik.values.bookingDate = today
      },
      function (error) {}
    )

    return bookTimes
  }

  const outPut = () => {
    const data = initializeTimes()
  }

  const updateTimes = (date) => {
    const response = fetchApi(formik.values.bookingDate)
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
    await wait(1000)
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

  return (
    <div className="booking-form-container">
      <h2 style={{ color: "#495e57", marginLeft: "5px" }}>
        Booking Table Form
      </h2>

      <form
        style={{ marginTop: "25px", marginLeft: "15px" }}
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <br />
        <input
          id="bookingDate"
          name="bookingDate"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bookingDate}
          className="booking-form-input"
        />
        {formik.errors.bookingDate ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {formik.errors.bookingDate}
          </div>
        ) : null}
        <br />
        <div className="booking-button-container">
          <button
            className="booking-form-button"
            type="submit"
            disabled={
              formik.errors.bookingDate ||
              formik.errors.bookingTime ||
              formik.errors.numberOfGuest ||
              formik.errors.occasion
            }
          >
            Make a reservation
          </button>
        </div>
        <label htmlFor="res-time" style={{ marginTop: "30px" }}>
          Choose time
        </label>
        <br />
        <select
          className="booking-time-options"
          id="bookingTime"
          name="bookingTime"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bookingTime}
        >
          {bookingTimeOptions}
        </select>
        {formik.errors.bookingTime ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {formik.errors.bookingTime}
          </div>
        ) : null}
        <br />
        <label htmlFor="guests">Number of guests</label> <br />
        <input
          className="booking-form-input"
          placeholder="0"
          type="number"
          id="numberOfGuest"
          min={0}
          name="numberOfGuest"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numberOfGuest}
        />
        {formik.errors.numberOfGuest ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {formik.errors.numberOfGuest}
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
          name="occasion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.occasion}
        >
          <option value="select">--Select--</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.errors.occasion ? (
          <div style={{ display: "inline", color: "red", marginLeft: "10px" }}>
            {formik.errors.occasion}
          </div>
        ) : null}
      </form>
    </div>
  )
}
