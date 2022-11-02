import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <h1>Karabo Maila</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;