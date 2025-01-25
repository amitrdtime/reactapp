import { Link } from 'react-router';
function Menu () {
    return(
        <nav className="sidebar bg-light p-3">
            <h4>Admin Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="home">Home</a></li>
                <li className="nav-item">
                    <Link className="nav-link" to="about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact Us</Link>
                </li>
                <li className="nav-item"><a className="nav-link" href="login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Menu;