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
                <p className="navbar-brand" style={styles.Title}>Sean Melody</p>
            </Link>
            {/* <Link to="/about" style={styles.linkStyles}>
                <p>About</p>
            </Link>
            <Link to="/portfolio" style={styles.linkStyles}>
                <p>Portfolio</p>
            </Link>
            <Link to="/contact" style={styles.linkStyles}>
                <p>Contact</p>
            </Link> */}
        </nav>
    )
}

export default Nav