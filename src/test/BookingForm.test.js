import { render, screen } from "@testing-library/react"
import BookingForm from "../pages/BookingForm"

test("Renders the BookingForm heading", () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Booking Table Form")
  expect(headingElement).toBeInTheDocument()

  const reservationElement = screen.getByText("Make a reservation")
  expect(reservationElement).toBeInTheDocument()
})
