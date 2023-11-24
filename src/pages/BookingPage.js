import React from "react"
import { useReducer } from "react"
import BookingForm from "./BookingForm"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const bookingTimeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
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
  const [state, dispatch] = useReducer(reducer, initialState)

  const submitForm = async (book) => {
    console.log("form submitted" + book.bookingDate)
    const response = submitApi(book)
    response.then(
      function (value) {
        //navigate("/confirmedbook")
        console.log("clicked" + value)
      },
      function (error) {
        console.log("clicked" + error)
      }
    )
  }

  const submitApi = async (formData) => {
    console.log("submitted date:" + formData.bookingDate)
    const randomNumber = Math.random()
    console.log("random Number:" + randomNumber)
    await wait(2000)
    console.log("first")
    return new Promise((resolve, reject) => {
      console.log("second")
      if (randomNumber < 0.5) reject(new Error("Form submission failed"))
      else resolve(true)
    })
  }

  const fetchApi = async (date) => {
    await wait(2000)
    return new Promise((resolve, reject) => {
      if (availableTimesByDate[date]) resolve(availableTimesByDate[date])
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
        console.log("promised val state" + value)

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
        console.log("promised val state" + value)
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
