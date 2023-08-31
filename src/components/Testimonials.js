import TestimonialCard from "./TestimonialCard"
import image from '../assets/profile-default-svgrepo-com.svg'
import { v4 as uuidv4 } from 'uuid';
import "./styles.css"
const TESTIMONIALS = [
    {
        _id: uuidv4(),
        author: "Heresy",
        img: image,
        rating: 4.5
    },
    {
        _id: uuidv4(),
        author: "Gemis",
        img: image,
        rating: 4.2
    },
    {
        _id: uuidv4(),
        author: "Eli",
        img: image,
        rating: 4.7
    },
    {
        _id: uuidv4(),
        author: "Harley",
        img: image,
        rating: 4.7
    }
]
export default function Testimonials() {
    const testimonialsList = TESTIMONIALS.map((item) => {
        return (
            <section className="testimonial-card" key={item._id}>
                <TestimonialCard data={item} />
            </section>
        )
    })
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-heading">Testimonials</h2>
            <div className="testimonial-grid">
                {testimonialsList}
            </div>
        </section>
    )
}