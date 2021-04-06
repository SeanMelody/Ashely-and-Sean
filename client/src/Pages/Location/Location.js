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

                    <h3 className="row mx-auto">Trocadero Clubhouse in Stern Grove, San Francisco, CA</h3>
                    <br></br>
                    <div className="row justify-content-center">
                        {/* <img src="./images/Trocadero-Clubhouse0.jpg" alt="Trocadero-Clubhouse" className="sf img-thumbnail col-md-4"></img> */}
                        <div className="col-md-8">
                            <p>We are excited to celebrate in the city that we met in and love San Francisco.</p>
                            <p>Trocadero Clubhouse is a small house located in Stern Grove park in South West San Francisco, just off of Highway 1
                            and filled with beautiful Redwoods, and a small pond. We have rented the house and surrounding park where we will be having our ceremony under
                            the trees, and dinner in a grassy clearing.  After dinner, there will be drinks and dancing in the Clubhouse as night sets and the fog rolls in.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <img src="./images/Trocadero-1.jpg" alt="Trocadero-1" className="border-dark sf img-thumbnail"></img>
                        <img src="./images/Trocadero-2.jpg" alt="Trocadero-2" className="border-dark sf img-thumbnail"></img>
                        <img src="./images/Trocadero-3.jpg" alt="Trocadero-3" className="border-dark sf img-thumbnail"></img>
                    </div>
                    <div className="row justify-content-center">
                        <img src="./images/Trocadero-4.jpg" alt="Trocadero-4" className="border-dark sf img-thumbnail"></img>
                        <img src="./images/Trocadero-5.jpg" alt="Trocadero-5" className="border-dark sf img-thumbnail"></img>
                        <img src="./images/Trocadero-6.jpg" alt="Trocadero-6" className="border-dark sf img-thumbnail"></img>
                    </div>
                    <div className="row justify-content-center">
                        <img src="./images/Trocadero-7.jpg" alt="Trocadero-7" className="border-dark sf img-thumbnail"></img>
                        <img src="./images/Trocadero-8.jpg" alt="Trocadero-8" className="border-dark sf img-thumbnail"></img>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Location
