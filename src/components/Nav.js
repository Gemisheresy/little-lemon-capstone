import "./styles.css";
export default function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <li className="nav-items"><a href="/">Home</a></li>
                <li className="nav-items"><a href="/">About</a></li>
                <li className="nav-items"><a href="/">Reservations</a></li>
                <li className="nav-items"><a href="/">Order Online</a></li>
                <li className="nav-items"><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}