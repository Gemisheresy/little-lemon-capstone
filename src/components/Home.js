import Testimonials from "./Testimonials"
import Specials from "./Specials"
import Jumbotron from "./Jumbotron"
import "./styles.css"
export default function Home() {
    return (
        <main className="main-container">
            <Jumbotron />
            <Specials />
            <Testimonials />
            <section className="about-section"></section>
        </main>
    )
}