import React from 'react'

const Location = () => {
    return (
        <div>
            <h1>Location:</h1>
            <br></br>
            <a href="https://www.google.com/maps/place/Trocadero+Clubhouse/@37.7387525,-122.5115278,12z/data=!4m5!3m4!1s0x0:0xe93215d73ebc37b5!8m2!3d37.7361732!4d-122.4781826"
                target="_blank"
                rel="noreferrer"
            >
                <img src="./images/GoogleMaps.png" alt="GoogleMaps" className="border-dark photo-margin img-thumbnail"></img>
            </a>
            <main className="container">
                {/* <div className="row">
                    <h3 className="row mx-auto">San Francisco, CA</h3>
                    <div className="row justify-content-center">
                        <img src="./images/SF0.jpg" alt="SF" className="sf img-thumbnail col-md-4"></img>
                        <p className="col-md-4"> We are excited to celebrate in the city that we met in</p>
                    </div>

                </div>
                <br></br>
                <div className="row">
                    <h3 className="row mx-auto">Stern Grove</h3>
                    <div className="row justify-content-center">
                        <p className="col-md-4">A Beautiful park in the South West of San Francisco is where we will be having our ceremony under the trees.
                            There is Limited Parking, but it is easily accessible with Uber!</p>
                        <img src="./images/Stern-Grove0.jpg" alt="Stern-Grove" className="sf img-thumbnail col-md-4"></img>
                    </div>
                </div>
                <br></br> */}
                <br></br>
                <div className="row">

                    <h3 className="row mx-auto">Trocadero Clubhouse, San Francisco, CA</h3>
                    <br></br>
                    <div className="row justify-content-center">
                        <img src="./images/Trocadero-Clubhouse0.jpg" alt="Trocadero-Clubhouse" className="sf img-thumbnail col-md-4"></img>
                        <div className="col-md-4">
                            <h6>We are excited to celebrate in the city that we met in</h6>
                            <h6>A Beautiful park in the South West of San Francisco is where we will be having our ceremony under the trees.
                            There is Limited Parking, but it is easily accessible with Uber!
                            </h6>
                            <h6>
                                Trocadero Clubhouse, also in Stern Grove is where we celebrate! Dinner and drinks outside,
                                but dancing will be inside the clubhouse!
                            </h6>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Location
