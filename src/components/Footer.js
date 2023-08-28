import logo from '../assets/Logo.svg'
export default function Footer() {
    return (
        <footer>
            <section>
                <img src={logo} alt="Little Lemon Logo" />
            </section>
            <section>
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
            <section>
                <h3>Contact</h3>
                <p>123 This Street</p>
                <p>555-555-5555</p>
                <p>marcro@littlelemon.com</p>
            </section>
            <section>
                <h3>Socials</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </footer>
    )
}