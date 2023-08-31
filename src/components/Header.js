import Nav from "./Nav"
import logo from '../assets/Logo.svg'
export default function Header() {
    return (
        <header className="header">
            <img className="nav-logo" src={logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    )
}