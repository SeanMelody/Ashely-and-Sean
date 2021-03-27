import React from 'react'

const Location = () => {
    return (
        <div>
            <main className="container shadow-lg p-3 mb-5 rounded main">
                <div className="container">
                    <div className="row">
                        <h3 className="row mx-auto">San Francisco, CA</h3>
                        <div className="row">

                            <img src="./images/SF.jpg" alt="SF" className="sf img-thumbnail col-md-4"></img>
                            <p className="col-md-6"> We are excited to celebrate in the city that we met in</p>
                        </div>

                    </div>
                    <br></br>
                    <div className="row">
                        <h3 className="row mx-auto">Stern Grove</h3>
                        <div className="row">
                            <p className="col-md-6">A Beautiful park in the South West of San Francisco is where we will be having our ceremony under the trees.
                            There is Limited Parking, but it is easily accessible with Uber!</p>
                            <img src="./images/Stern-Grove.jpg" alt="Stern-Grove" className="sf img-thumbnail col-md-4"></img>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">

                        <h3 className="row mx-auto">Trocadero Clubhouse</h3>
                        <div className="row">
                            <img src="./images/Trocadero-Clubhouse.jpg" alt="Trocadero-Clubhouse" className="sf img-thumbnail col-md-4"></img>
                            <p className="col-md-6">Trocadero Clubhouse, also in Stern Grove is where we celebrate! Dinner and drinks outside,
                            but dancing will be inside the clubhouse!</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Location
