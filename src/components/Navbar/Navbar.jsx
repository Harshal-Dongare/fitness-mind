import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
import { links } from "../../data"; // data

import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                {/* logo */}
                <Link
                    to={"/"}
                    className="company_logo"
                    onClick={() => setIsNavShowing(false)}
                >
                    Fitness Mind
                </Link>

                {/* Nav links */}
                <ul
                    className={`nav__links 
                        ${isNavShowing ? "show__nav" : "hide__nav"}`}
                >
                    {links.map(({ name, path }, index) => (
                        <li key={index}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active_nav" : ""
                                }
                                onClick={() => setIsNavShowing((prev) => !prev)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu for smaller screens */}
                <button
                    className="nav__toggle_btn"
                    onClick={() => setIsNavShowing(!isNavShowing)}
                >
                    {isNavShowing ? <RiCloseLargeLine /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
