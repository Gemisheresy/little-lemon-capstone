import Testimonials from "../components/Testimonials"
import Specials from "../components/Specials"
import Jumbotron from "../components/Jumbotron"
import AboutUs from "../components/About"
export default function Home() {
    return (
        <main>
            <Jumbotron />
            <Specials />
            <Testimonials />
            <AboutUs />
        </main>
    )
}