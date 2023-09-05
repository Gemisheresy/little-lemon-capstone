import logo from '../assets/Logo.svg'
import "./styles.css";
export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer-section">
                <img className="footer-img" src={logo} alt="Little Lemon Logo" />
            </section>
            <section className="footer-section">
                <h3 className='footer-sec-heading'>Doormat Navigation</h3>
                <nav>
                    <ul className="list-style-none footer-sec-content">
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
                <h3 className='footer-sec-heading'>Contact</h3>
                <div className="footer-sec-content">
                    <p>123 This Street</p>
                    <p>555-555-5555</p>
                    <p>marcro@littlelemon.com</p>
                </div>
            </section>
            <section className="footer-section">
                <h3 className='footer-sec-heading'>Socials</h3>
                <ul className="list-style-none footer-sec-content">
                    <li>twitter</li>
                    <li>insta</li>
                    <li>facebook</li>
                    <li>threads</li>
                </ul>
            </section>
        </footer>
    )
}