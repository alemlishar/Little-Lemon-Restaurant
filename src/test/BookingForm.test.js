import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "../pages/BookingForm"
import { useFormik, Field, Form, Formik, FormikProps } from "formik"
import { act } from "react-dom/test-utils"

test("Renders the BookingForm heading", () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Booking Table Form")
  expect(headingElement).toBeInTheDocument()
})

test("Renders the BookingForm input", () => {
  render(<BookingForm />)

  const dateElement = screen.getByText("Choose date")
  expect(dateElement).toBeInTheDocument()

  const timeElement = screen.getByText("Choose time")
  expect(timeElement).toBeInTheDocument()

  const guestElement = screen.getByText("Number of guests")
  expect(guestElement).toBeInTheDocument()

  const occasion = screen.getByText("Occasion")
  expect(occasion).toBeInTheDocument()
})

describe("Booking Form", () => {
  test("Checking booking button submission is disabled", () => {
    const handleSubmit = jest.fn()
    render(<BookingForm onSubmit={handleSubmit} />)

    const dateInput = screen.getByTestId("bookingDate")
    const timeInput = screen.getByTestId("bookingTime")
    const guestInput = screen.getByTestId("bookingGuest")
    const occasionInput = screen.getByLabelText(/Occasion/)

    // fireEvent.change(dateInput, { target: { value: "2023-11-11" } })
    // fireEvent.change(timeInput, { target: { value: "17:00" } })
    //fireEvent.change(guestInput, { target: { value: "0" } })
    //fireEvent.change(occasionInput, { target: { value: "Birthday" } })
    //fireEvent.click(reservationButton)

    act(() => {
      fireEvent.change(dateInput, { target: { value: "" } })
      fireEvent.change(timeInput, { target: { value: "17:00" } })
      fireEvent.change(guestInput, { target: { value: "1" } })
      fireEvent.change(occasionInput, { target: { value: "Birthday" } })
    })

    const reservationButton = screen.getByRole("button", {
      name: /Make a reservation/i,
    })

    fireEvent.click(reservationButton)
    expect(handleSubmit).not.toHaveBeenCalled()
  })
})
