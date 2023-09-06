import banner from '../assets/restaurant.jpg'

export default function Confirmation() {
    return (
        <main>
            <section>
                <img src={banner} className="reservation-banner" alt="reservation-banner" />
            </section>
            <section className="confrimation">
                <p className='confrimation-text'>Your reservation has been made. See you soon!!!</p>
            </section>
        </main>
    )
}