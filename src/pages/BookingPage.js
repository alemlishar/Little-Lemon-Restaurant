import React from "react"

import BookingForm from "./BookingForm"

export default function BookingPage() {
  const handleSubmitClick = (book) => {
    console.log("form submitted" + book.bookingDate)
  }
  return (
    <>
      <BookingForm onSubmit={handleSubmitClick} />
    </>
  )
}
