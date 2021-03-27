// import all the Goodness
import React from 'react'
import FooterStyles from "./FooterStyles"

// Footer Component will display on every page
const Footer = () => {
    return (
        <footer style={FooterStyles.Footer}>
            <hr></hr>
            {/* copyright and love 2021 */}
            <h6>Ashley Cookerly &#9829; Sean Melody</h6>
        </footer>
    )
}

export default Footer
