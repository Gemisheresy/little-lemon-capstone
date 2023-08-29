import logo from '../assets/Logo.svg'
import "./styles.css";
export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer-section">
                <img src={logo} alt="Little Lemon Logo" />
            </section>
            <section className="footer-section">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section className="footer-section">
                <h3>Contact</h3>
                <p>123 This Street</p>
                <p>555-555-5555</p>
                <p>marcro@littlelemon.com</p>
            </section>
            <section className="footer-section">
                <h3>Socials</h3>
                <ul className="social-links">
                    <li>twitter</li>
                    <li>insta</li>
                    <li>facebook</li>
                    <li>threads</li>
                </ul>
            </section>
        </footer>
    )
}