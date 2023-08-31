import './styles.css'
export default function SpecialCard({ data }) {
    return (
        <>
            <div className="specials-card-img">
                <img src={data.img} alt={data.alt} />
            </div>
            <div className="specials-card-header">
                <h3 className="specials-card-title">{data.title}</h3>
                <h3 className="specials-card-price">&#x24; {data.price}</h3>
            </div>
            <p className="specials-card-description">{data.description}</p>
            <button>Order Now</button>
        </ >
    )
}