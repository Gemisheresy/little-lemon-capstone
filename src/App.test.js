import { render, screen } from "@testing-library/react"
import BookingForm from "./components/BookingForm"

test("Renders Date picker input", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]
  render(<BookingForm availableTimes={availableTimes} />)
  const datePicker = screen.getByRole("date-picker")
  expect(datePicker).toBeInTheDocument()
})