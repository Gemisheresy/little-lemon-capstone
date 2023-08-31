import "./styles.css"
export default function TestimonialCard({ data }) {
    return (
        <div className="testimonial-card-wrapper">
            <h3>{data.author}</h3>
            <div>
                <div className="testimonial-card-badge">
                    <img className="testimonial-card-img" src={data.img} alt={data.author} />
                    <p className="testimonial-rating">{data.rating} <span className="testimonial-star">&#9733;</span></p>
                </div>
                <p>{data.review}</p>
            </div>
        </div>
    )
}