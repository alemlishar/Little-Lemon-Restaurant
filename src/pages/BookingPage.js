import React from "react"
import BookingForm from "./BookingForm"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function BookingPage() {
  const submitForm = (book) => {
    console.log("form submitted" + book.bookingDate)
    const response = submitApi(book)
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

  const submitApi = async (formData) => {
    console.log("submitted date:" + formData.bookingDate)
    const randomNumber = Math.random()
    console.log("random Number:" + randomNumber)
    await wait(2000)
    return new Promise((resolve, reject) => {
      if (randomNumber < 0.5) reject(new Error("Form submission failed"))
      else resolve(true)
    })
  }

  return (
    <>
      <BookingForm submitForm={submitForm} />
    </>
  )
}
