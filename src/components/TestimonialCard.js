export default function TestimonialCard({ data }) {
    return (
        <>
            <h3>{data.author}</h3>
            <img src={data.img} alt={data.author} height={80} width={80} />
            <p>{data.rating} <span>&#9733;</span></p>
            <p>{data.review}</p>
        </>
    )
}