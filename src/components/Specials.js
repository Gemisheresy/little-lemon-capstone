import SpecialCard from "./SpecialCard"
import greekSalad from '../assets/greek-salad.jpg'
import lemonDessert from '../assets/lemon-dessert.jpg'
import { v4 as uuidv4 } from 'uuid';
import './styles.css'
const SPECIALS = [
    {
        _id: uuidv4(),
        title: "Greek Salad",
        price: "14.99",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vestibulum sollicitudin lectus sed sapien venenatis faucibus sed ut sapien. Ut efficitur tempus est,
          vitae egestas sem porttitor sit amet. Ut ac ante at lacus dictum euismod laoreet nec urna.`,
        img: greekSalad,
        alt: 'greek-salad'
    },
    {
        _id: uuidv4(),
        title: "Greek Salad With Chicken",
        price: "17.99",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vestibulum sollicitudin lectus sed sapien venenatis faucibus sed ut sapien. Ut efficitur tempus est,
          vitae egestas sem porttitor sit amet. Ut ac ante at lacus dictum euismod laoreet nec urna.`,
        img: greekSalad,
        alt: 'greek-salad-chicken'
    },
    {
        _id: uuidv4(),
        title: "Lemon Dessert",
        price: "6.99",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vestibulum sollicitudin lectus sed sapien venenatis faucibus sed ut sapien. Ut efficitur tempus est,
          vitae egestas sem porttitor sit amet. Ut ac ante at lacus dictum euismod laoreet nec urna.`,
        img: lemonDessert,
        alt: 'lemon-dessert'

    }
]
export default function Specials() {
    const specialList = SPECIALS.map((item) => {
        return (
            <section key={item._id} className="specials-card" >
                <SpecialCard data={item} />
            </section>
        )
    })
    return (
        <section className="specials-section">
            <div className="specials-header">
                <h2 className="specials-header-title">Specials</h2>
                <button className="specials-header-button button"><span>Order Online</span></button>
            </div>
            <div className="specials-grid">
                {specialList}
            </div>
        </section >
    )
}