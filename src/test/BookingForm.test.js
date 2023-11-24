import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import BookingForm from "../pages/BookingForm"

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

//describe("Booking Form", () => {
test("Checking booking button  is disabled on initial mount", () => {
  const submitForm = jest.fn()
  render(<BookingForm submitForm={submitForm} />)

  //  const date = new Date()
  // const today =
  //  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  //const { bookData } = result.current
  //expect(initialValues).toBe(0)
  //  screen.getByTestId("bookingDate")
  // screen.getByTestId("bookingTime")
  //screen.getByTestId("bookingGuest")
  // screen.getByLabelText(/Occasion/)

  // fireEvent.change(dateInput, { target: { value: "2023-11-11" } })
  // fireEvent.change(timeInput, { target: { value: "17:00" } })
  //fireEvent.change(guestInput, { target: { value: "0" } })
  //fireEvent.change(occasionInput, { target: { value: "Birthday" } })
  //fireEvent.click(reservationButton)

  //  fireEvent.change(dateInput, { target: { value: "" } })
  // fireEvent.change(timeInput, { target: { value: "17:00" } })
  // fireEvent.change(guestInput, { target: { value: "1" } })
  // fireEvent.change(occasionInput, { target: { value: "Birthday" } })

  const reservationButton = screen.getByRole("button", {
    name: /Make a reservation/i,
  })

  fireEvent.click(reservationButton)
  expect(submitForm).toHaveBeenCalledTimes(1)
})

test("checking callback functionality", async () => {
  const submitForm = jest.fn()
  render(<BookingForm submitForm={submitForm} />)

  const bookingDate = screen.getByTestId("bookingDate")
  await userEvent.type(bookingDate, "2023-11-11")

  const bookingTime = screen.getByTestId("bookingTime")
  await userEvent.type(bookingTime, "10:00")

  const numberOfGuest = screen.getByTestId("bookingGuest")
  await userEvent.type(numberOfGuest, "10:00")

  const occasion = screen.getByLabelText(/Occasion/)
  await userEvent.type(occasion, "BirthDay")

  fireEvent.click(
    screen.getByRole("button", {
      name: /Make a reservation/i,
    })
  )

  expect(submitForm).toHaveBeenCalledTimes(1)
})

test("Checking initializeTimes function", async () => {
  const submitForm = jest.fn()

  render(<BookingForm submitForm={submitForm} />)
  const bookingDate = screen.getByTestId("bookingDate")
  await userEvent.type(bookingDate, "11-22-2023")

  const optionTime = await screen.getByTestId("bookingTime")
  //const occasion = screen.getByLabelText(/Occasion/)

  expect(optionTime).toBeInTheDocument()
})

/*
test("Checking updateTimes function", () => {
  render(<BookingForm />)
  console.log(initializeTimes())
  //expect(initializeTimes()).toBeInTheDocument()
})
*/
