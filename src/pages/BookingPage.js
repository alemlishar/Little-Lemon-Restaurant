import React from "react"
import { useReducer } from "react"
import BookingForm from "./BookingForm"
import { useNavigate } from "react-router-dom"
import BookingSlot from "./BookingSlot"
import { gethours, submitAPI, fetchAPI } from "./ApiSimulation"

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
  availableTimeByDate: availableTimesByDate,
  bookedTimeByDate: [],
}

export default function BookingPage() {
  const bookingSlot = Object.entries(availableTimesByDate).forEach(
    (key, value) => {
      return <BookingSlot id={key[0]} value={key[1]} />
    }
  )

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
      <div
        style={{
          position: "relative",
          border: "3px solid #f4ce14",
          height: "150px",
          marginTop: "60px",
          left: "30%",
          width: "43%",
          marginBottom: "0px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "11px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "72px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "133px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "194px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "246px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "310px",
            width: "50px",
            height: "40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "370px",
            width: "50px",
            height: "40px",
          }}
        ></div>{" "}
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "430px",
            width: "50px",
            height: "40px",
          }}
        ></div>{" "}
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "490px",
            width: "50px",
            height: "40px",
          }}
        ></div>{" "}
        <div
          style={{
            position: "absolute",
            border: "3px solid #495e57",
            marginLeft: "550px",
            width: "50px",
            height: "40px",
          }}
        ></div>
      </div>
      <BookingForm
        submitForm={submitForm}
        initializeTime={initializeTime}
        updateTime={updateTimes}
        availableTime={state}
      />
    </>
  )
}
