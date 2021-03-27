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
                    <div style={HomeStyles.Rounded} className="container card Enter col-md-4 rounded">
                        <h3 className="card-title">Ashley & Sean</h3>
                        <h6 className="card-title">Welcome to our wedding page</h6>
                        <h5 className="card-body mb-2 text-muted">October 9th, 2021</h5>
                        <Link className="btn btn-lg btn-outline-dark" to="/ourstory">
                            Enter
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home