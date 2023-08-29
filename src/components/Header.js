import Nav from "./Nav"
import logo from '../assets/Logo.svg'
export default function Header() {
    return (
        <header className="header">
            <img src={logo} height="80" width="280" alt="Little Lemon Logo" />
            <Nav />
        </header>
    )
}