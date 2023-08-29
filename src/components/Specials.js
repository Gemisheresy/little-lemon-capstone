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

    },
    {
        _id: uuidv4(),
        title: "Lemon Dessert With Vanilla Ice Cream",
        price: "7.99",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vestibulum sollicitudin lectus sed sapien venenatis faucibus sed ut sapien. Ut efficitur tempus est,
          vitae egestas sem porttitor sit amet. Ut ac ante at lacus dictum euismod laoreet nec urna.`,
        img: lemonDessert,
        alt: 'lemon-dessert-ice-cream'
    }
]
export default function Specials() {
    const specialList = SPECIALS.map((item) => {
        return (
            <section key={item._id} className="gird-col-span-two" >
                <SpecialCard data={item} />
            </section>
        )
    })
    return (
        <section className="specials-section">
            <div>
                <h2>Specials</h2>
                <button>Order Online</button>
            </div>
            <div className="specials-grid">
                {specialList}
            </div>
        </section >
    )
}