import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <a href="/" className="logo">Karabo Maila</a>
            <ul>
                <li className="active"><NavLink className="link" to="/">Home</NavLink></li>
                <li><NavLink className="link" to="/blogs">Blogs</NavLink></li>
                <li><NavLink className="link" to="/photography">Photography</NavLink></li>
                <li><NavLink className="link" to="/contact">Contact</NavLink></li>
                <li><NavLink className="link" to="/about">About Me</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;