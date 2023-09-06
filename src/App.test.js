import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./components/BookingForm"

test("Renders Date picker input", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]
  render(<BookingForm availableTimes={availableTimes} />)
  const datePicker = screen.getByText("Choose Date")
  expect(datePicker).toBeInTheDocument()
})

test("Submit form", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]
  const handleSubmit = jest.fn((data) => { if (data) return true })
  render(<BookingForm availableTimes={availableTimes} handleSubmit={handleSubmit} dispatch={() => availableTimes} />)
  const submitbutton = screen.getByRole("submit")
  fireEvent.click(submitbutton)
  expect(handleSubmit).toBeCalledTimes(0)
})