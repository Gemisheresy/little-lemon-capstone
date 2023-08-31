import Testimonials from "./Testimonials"
import Specials from "./Specials"
import Jumbotron from "./Jumbotron"
import AboutUs from "./About"
import "./styles.css"
export default function Home() {
    return (
        <main>
            <Jumbotron />
            <Specials />
            <Testimonials />
            <AboutUs />
            <section className="about-section"></section>
        </main>
    )
}