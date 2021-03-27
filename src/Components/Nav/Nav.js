// import all the Goodness
import React from 'react'
//Lets you link pages
import { Link } from "react-router-dom";
import styles from "./NavStyles"

// Nav bar will display on each page, using link to switch out contents
function Nav() {
    return (
        <nav className="nav row" style={styles.navStyles}>
            <Link to="/ourstory" style={styles.linkStyles}>
                <p>Our Story</p>
            </Link>
            <Link to="/location" style={styles.linkStyles}>
                <p>Location</p>
            </Link>
            <Link to="/weddingparty" style={styles.linkStyles}>
                <p>Wedding Party</p>
            </Link>
            <Link to="/photosofus" style={styles.linkStyles}>
                <p>Photos of Us</p>
            </Link>
            <Link to="/covidq-a" style={styles.linkStyles}>
                <p>COVID and Q & A </p>
            </Link>
            <Link to="/registry" style={styles.linkStyles}>
                <p>Registry</p>
            </Link>
        </nav>
    )
}

export default Nav