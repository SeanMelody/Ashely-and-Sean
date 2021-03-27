// Import all the goodness
import React from 'react'
import HomeStyles from "./HomeStyles"
import { Link } from "react-router-dom";

// Home is the welcome page, displaying the Binary-Film gif
const Home = () => {
    return (
        <div>
            {/* Background image gif */}
            <div className="background-Image" style={HomeStyles.GifStyles}>
                {/* Welcome card contents */}
                <div style={HomeStyles.Enter} >
                    <div style={HomeStyles.Rounded} className="container Enter col-md-4 rounded">
                        <h3 className="card-title">Hi!</h3>
                        <h4 className="card-title">I'm Sean Melody</h4>
                        <h5 className="card-body mb-2 text-muted">Full-stack MERN Developer Extraordinaire</h5>
                        <Link className="btn btn-lg btn-outline-dark" to="/">
                            Enter
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home