import { useState, useReducer, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../utils/apiUtils'
import banner from '../assets/restaurant.jpg'
import BookingForm from '../components/BookingForm'
import { useNavigate } from 'react-router-dom'
export default function Reservations() {
    const navigate = useNavigate()

    const handleSubmit = async (formData) => {
        const confirmation = await submitAPI(formData)
        if (confirmation) {
            navigate('/booking-confirmation')
        }

    }
    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }
    return (
        <main>
            <section>
                <img src={banner} className="reservation-banner" alt="reservation-banner" />
            </section>
            <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} />
        </main>
    )
}