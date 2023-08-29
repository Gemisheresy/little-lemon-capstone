import image from '../assets/restaurant.jpg'
export default function Jumbotron() {
    return (
        <section className="flex-list">
            <div className="flex-item">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>A family owned restaurants serving traditional Greek dishes with a modern twist</p>
            </div>
            <div className="flex-item">
                <img src={image} alt="restaurant" width="360" height="240" />
            </div>
        </section>
    )
}