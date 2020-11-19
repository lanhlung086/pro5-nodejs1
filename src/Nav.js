import {Link} from "react-router-dom"
export default function Nav(){
    return (
        <nav className="section nav-menu">
            <div className="container nav-menu__container">
                <div className="flex-items">
                    <Link to="/"  title="Alessi Bakery"><img src="imgs/alessi-logo.png" alt="Home Page" /></Link>
                </div>
                <div className="flex-items">
                    <Link to="/Catering">CATERING</Link>
                </div>
                <div className="flex-items">
                    <Link to="/Bakery">BAKERY</Link>
                </div>
                <div className="flex-items">
                    <Link to="/Deli">DELI</Link>
                </div>
                <div className="flex-items">
                    <Link to="/Cakes">CAKES</Link>
                </div>
                <div className="flex-items">
                    <Link to="/About">ABOUT</Link>
                </div>
                <div className="flex-items">
                    <Link to="/Contact">CONTACT</Link>
                </div>
                <div className="flex-items">
                    <a href="https://www.facebook.com/AlessiBakeries/" className="icon-links"><i className="fab fa-facebook-f" /></a>
                </div>
                <div className="flex-items">
                    <a href="https://twitter.com/alessibakery?lang=en" className="icon-links"><i className="fab fa-twitter" /></a>
                </div>
                <div className="flex-items">
                    <a href="https://www.instagram.com/alessibakery/" className="icon-links"><i className="fab fa-instagram" /></a>
                </div>
                <div className="flex-items">
                    <Link to="/OrderOnline" className="order-btn">
                        <img src="imgs/order-now-btn.png" />
                        <span className="order-btn__name">ORDER ONLINE</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}