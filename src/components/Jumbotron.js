import image from '../assets/restaurant.jpg'
export default function Jumbotron() {
    return (
        <section className="jumbotron-section">
            <div className="jumbotron-information">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>A family owned restaurants serving traditional Greek dishes with a modern twist</p>
                <button>Reserve Table</button>
            </div>
            <div className="jumbotron-img">
                <img src={image} alt="restaurant" width="360" height="240" />
            </div>
        </section>
    )
}