import owner1 from '../assets/owners1.jpg'
import owner2 from '../assets/owners2.jpg'
export default function AboutUs() {
    return (
        <section className="about-section">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </div>
            <div className="about-imgs image-stack">
                <img className="about-img about-img-top" src={owner1} alt="little-lemon-owners-top-image" />
                <img className="about-img about-img-bottom" src={owner2} alt="little-lemon-owners-bottom-image" />
            </div>
        </section>
    )
}