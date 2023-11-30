import React from "react"
import { useReducer } from "react"
import BookingForm from "./BookingForm"
import { useNavigate } from "react-router-dom"
import BookingSlot from "./BookingSlot"
import { gethours, submitAPI, fetchAPI } from "../../pages/ApiSimulation"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const bookingTimeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const reducer = (prevState, action) => {
  switch (action.type) {
    case "updateTime":
      return {
        ...prevState,
        timeValue: action.val,
      }
    case "initializeTime":
      return {
        ...prevState,
        timeValue: action.val,
      }
    case "bookTime":
      return {}
  }
}

const initialState = {
  timeValue: bookingTimeSlots,
  date:
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate(),
}

export default function BookingPage() {
  console.log("type of" + typeof availableTimesByDate)
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()

  const submitForm = async (book) => {
    //console.log("api response" + submitAPI(book))
    console.log(
      "submitted form date and time:" +
        new Date(book.bookingDate + "T" + book.bookingTime)
    )
    const response = submitAPI({
      ...book,
      bookingDate: new Date(
        book.bookingDate + "T" + book.bookingTime + ":00.000Z"
      ),
    })

    if (response) navigate("/confirmedbook")
  }

  const submitApi = async (formData) => {
    const randomNumber = Math.random()
    await wait(2000)
    return new Promise((resolve, reject) => {
      if (randomNumber < 0.5) reject(new Error("Form submission failed"))
      else resolve(true)
    })
  }

  const fetchApi = async (date) => {
    await wait(2000)
    return new Promise((resolve, reject) => {
      const value = fetchAPI(new Date(date))
      console.log("new api fetched time:" + gethours(value))
      if (value) resolve(gethours(value))
      else reject(new Error("No available times for the selected date."))
    })
  }

  const initializeTime = () => {
    const date = new Date()
    const today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    const response = fetchApi(today)
    response.then(
      function (value) {
        dispatch({
          type: "initializeTime",
          val: value,
        })
      },
      function (error) {}
    )
  }

  const updateTimes = (date) => {
    const response = fetchApi(date)
    response.then(
      function (value) {
        dispatch({
          type: "updateTime",
          val: value,
        })
      },
      function (error) {}
    )
  }

  return (
    <>
      <BookingForm
        submitForm={submitForm}
        initializeTime={initializeTime}
        updateTime={updateTimes}
        availableTime={state}
      />
    </>
  )
}
