import React, { useReducer, useState, useEffect } from "react"
import logo from "./../assets/restauranfood.jpg"
import BookingForm from "./BookingForm"

export const availableTimesByDate = {
  "2023-08-29": ["10:00", "11:00", "12:00"],
  "2023-09-01": ["10:00", "11:00", "12:00"],
  "2023-09-02": ["14:00", "15:00", "16:00"],
  "2023-09-03": ["10:00", "11:00", "12:00"],
  "2023-09-04": ["14:00", "15:00", "16:00"],
  "2023-09-05": ["10:00", "11:00", "12:00"],
  "2023-09-06": ["14:00", "15:00", "16:00"],
  "2023-09-07": ["10:00", "11:00", "12:00"],
  "2023-09-08": ["14:00", "15:00", "16:00"],
  "2023-09-09": ["10:00", "11:00", "12:00"],
  "2023-09-10": ["14:00", "15:00", "16:00"],
  "2023-09-11": ["10:00", "11:00", "12:00"],
  "2023-09-12": ["14:00", "15:00", "16:00"],
  "2023-09-13": ["10:00", "11:00", "12:00"],
  "2023-09-14": ["14:00", "15:00", "16:00"],
  "2023-09-15": ["10:00", "11:00", "12:00"],
  "2023-09-16": ["14:00", "15:00", "16:00"],
  "2023-09-17": ["10:00", "11:00", "12:00"],
  "2023-09-18": ["14:00", "15:00", "16:00"],
  "2023-09-19": ["10:00", "11:00", "12:00"],
  "2023-09-20": ["14:00", "15:00", "16:00"],
  "2023-09-21": ["14:00", "15:00", "16:00"],
  "2023-09-22": ["10:00", "11:00", "12:00"],
  "2023-09-23": ["14:00", "15:00", "16:00"],
  "2023-09-24": ["10:00", "11:00", "12:00"],
  "2023-09-25": ["14:00", "15:00", "16:00"],
  "2023-09-26": ["10:00", "11:00", "12:00"],
  "2023-09-27": ["14:00", "15:00", "16:00"],
  "2023-09-28": ["10:00", "11:00", "12:00"],
  "2023-09-29": ["14:00", "15:00", "16:00"],
  "2023-09-30": ["14:00", "15:00", "16:00"],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const bookingTimeSlots = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]
const aboutParagraph =
  "   We are family owned Meditrannean restaurant, focus on traditional" +
  "recipes served with a modern twist."

export default function Main() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches))

    return () => {
      window
        .matchMedia("(min-width: 768px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])
  const [availableTime, dispatch] = useReducer(reducer, bookingTimeSlots)
  const [availableTimes, setAvailableTimes] = useState([])

  const fetchApi = async (date) => {
    console.log("selected Date:" + date)
    return new setTimeout(
      Promise((resolve, reject) => {
        if (availableTimesByDate[date]) resolve(availableTimesByDate[date])
        else reject(new Error("No available times for the selected date."))
      }),
      await wait(2000)
    )
  }

  const initializeTimes = () => {
    const date = new Date()
    const today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    const response = fetchApi(today)

    return ""
  }

  const updateTimes = (date) => {
    const response = fetchApi(date)
  }

  return (
    <div className="main-container">
      <div style={{ position: "absolute", left: "31%" }}>
        <p className="main-title">Little Lemmon</p>
        <p className="main-chicago">Chicago</p>
        <h6 className="main-about">{aboutParagraph}</h6>
        {matches && (
          <button className="main-breserve-utton">Reserve a Table</button>
        )}
      </div>
      {matches && (
        <div className="main-logo">
          <img src={logo} width="190px" height="220px" alt="hey"></img>
        </div>
      )}
    </div>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateTime": {
      return {}
    }
    case "initializeTime": {
      return {}
    }
  }

  throw Error("Unknown action: " + action.type)
}
