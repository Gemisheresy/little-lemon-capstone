import { useState, useReducer } from 'react'
import { fetchAPI, submitAPI } from '../utils/apiUtils'
import banner from '../assets/restaurant.jpg'
import BookingForm from '../components/BookingForm'
export default function Reservations() {
    const handleSubmit = (formData) => {
        submitAPI(formData)
    }
    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }
    return (
        <main>
            <section>
                <img src={banner} />
            </section>
            <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} />
        </main>
    )
}