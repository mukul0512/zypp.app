import logo from '../assets/logo/logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none',
        padding: '5px'
    };

    return (
        <div style={{ position: 'fixed', width: '100%', top: '0', border: '1px solid black', paddingLeft: '30px' }}>
            <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', height: '70px' }}>
                <li>
                    <Link to="/" style={linkStyle}>
                        <img
                            src={logo}
                            alt="logo"
                            width="30"
                            height="30"
                        />
                    </Link>
                </li>
                <li><Link to="/who-we-are" style={linkStyle}>WHO WE ARE</Link></li>
                <li><Link to="/technologies" style={linkStyle}>TECHNOLOGIES</Link></li>
                <li><Link to="/deliver-earn" style={linkStyle}>DELIVER & EARN</Link></li>
                <li><Link to="/buy-lease-earn" style={linkStyle}>BUY LEASE & EARN</Link></li>
                <li><Link to="/advertising" style={linkStyle}>ADVERTISING</Link></li>
                <li><Link to="/environment" style={linkStyle}>ENVIRONMENT</Link></li>
                <li>
                    <select defaultValue="">
                        <option value="">SERVICES</option>
                        <option value="evDeliveries">evDeliveries</option>
                        <option value="lastMileDeliveries">lastMileDel.</option>
                        <option value="3wCargo">3wCargo</option>
                    </select>
                </li>
                <li><Link to="/blog" style={linkStyle}>BLOG</Link></li>
                <li><Link to="/esg" style={linkStyle}>ESG</Link></li>
                <li><Link to="/press" style={linkStyle}>PRESS</Link></li>
                <li><Link to="/careers" style={linkStyle}>CAREERS</Link></li>
                <li><Link to="/contact-us" style={linkStyle}>CONTACT US</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
