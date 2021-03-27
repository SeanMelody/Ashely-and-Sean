// import all the Goodness
import React from 'react'
//Lets you link pages
import { Link } from "react-router-dom";
import styles from "./NavStyles"

// Nav bar will display on each page, using link to switch out contents
function Nav() {
    return (
        <nav className="nav row" style={styles.navStyles}>
            <Link to="/" style={styles.linkStyles}>
                <p className="navbar-brand" style={styles.Title}>Ashley and Sean</p>
            </Link>
            <Link to="/ourstory" style={styles.linkStyles}>
                <p>Our Story</p>
            </Link>
            <Link to="/location" style={styles.linkStyles}>
                <p>Location</p>
            </Link>
            {/* <Link to="/contact" style={styles.linkStyles}>
                <p>Contact</p>
            </Link> */}
        </nav>
    )
}

export default Nav