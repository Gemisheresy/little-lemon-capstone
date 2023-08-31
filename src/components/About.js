import owner1 from '../assets/owners1.jpg'
import owner2 from '../assets/owners2.jpg'
export default function AboutUs() {
    return (
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </div>
            <div>
                <img src={owner1} />
                <img src={owner2} />
            </div>
        </section>
    )
}