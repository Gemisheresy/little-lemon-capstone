import { useState } from 'react'
export default function BookingForm({ availableTimes, dispatch, handleSubmit }) {
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("None")
    const [time, setTime] = useState("")
    return (
        <>
            <form className='reservation-form' onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    date,
                    time,
                    guests,
                    occasion
                })
            }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={(e) => {
                    dispatch(e.target.value)
                    setDate(e.target.value)
                }} value={date} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((time) => (<option value={time}>{time}</option>))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)} value={guests} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => setOccasion(e.target.value)} value={occasion}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form >
        </>
    )
}