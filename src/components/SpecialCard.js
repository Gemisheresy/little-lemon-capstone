
export default function SpecialCard({ data }) {
    return (
        <>
            <img src={data.img} alt={data.alt} height={80} width={80} />
            <div>
                <h3>{data.title}</h3>
                <h3>&#x24; {data.price}</h3>
            </div>
            <p>{data.description}</p>
        </ >
    )
}