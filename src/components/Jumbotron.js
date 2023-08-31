import image from '../assets/restaurant.jpg'
export default function Jumbotron() {
    return (
        <section className="jumbotron-section">
            <div className="jumbotron-information">
                <h1 className="jumbotron-title">Little Lemon</h1>
                <h3 className="jumbotron-subtitle">Chicago</h3>
                <p className="jumbotron-description">A family owned restaurants serving traditional Greek dishes with a modern twist</p>
                <button>Reserve Table</button>
            </div>
            <div className="jumbotron-img">
                <img src={image} alt="restaurant" width="360" height="240" />
            </div>
        </section>
    )
}