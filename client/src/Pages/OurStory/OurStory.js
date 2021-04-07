import React from 'react'
import OurStoryStyles from "./OurStoryStyles"

const OurStory = () => {
    return (
        <div style={OurStoryStyles.BodyStyle} >

            <h1 className="google-font">Our Story</h1>
            <br></br>
            <main className="container shadow-lg p-3 mb-5 rounded main">
                {/* <div className="row"> */}
                <section className="row section">
                    <div className="col-md-4 about-me-photo">

                        <img src="./images/Ice-Skating.jpg" alt="Ice Skating" className="border-dark img-thumbnail"></img>
                        {/* <img src="./images/Proposal.JPG" alt="Proposal" className="img-thumbnail"></img> */}
                    </div>

                    <div className="col-md-8">
                        <p style={OurStoryStyles.Paragraph}>
                            Our story begins in San Francisco. And with our wonderful friend (and Sean's best man) Joe.
                            Joe knew Ashley though the Sunday Recess Rec League and met Sean when he moved to the city
                            through their mutual friend Stephen. Joe and Sean hung out a handful of times before the
                            friend groups collided at a bar off of Polk street, and Sean met
                            Ashley and became smitten. With the bar not being the best place to start a new romance, and Sean not being
                            smart enough to get Ashley's number, the two didn't meet again until a
                            few months later when the friend groups collided again Ice Skating on the Embarcadeo.
                            </p>
                    </div>

                </section>

                <section className="row section">
                    <div className="col-md-4 about-me-photo">

                        <img src="./images/2015-01-Long.jpg" alt="Pink Birthday Party" className="border-dark img-thumbnail"></img>
                        {/* <img src="./images/Surprise.jpg" alt="Surprise" className="img-thumbnail"></img> */}
                    </div>
                    <div className="col-md-8">
                        <p style={OurStoryStyles.Paragraph}>
                            Ice skating ended with to an invite to Ashley's famous Pink birthday party a few weeks later.
                            After that night Sean got Joe's blessing and asked Ashley to "hang out". Fast forward six wonderful years,
                            endless adventures, countless delicious meals and one perfect and adorable fur baby.
                    </p>
                    </div>
                </section>

                <section className="row section">
                    <div className="col-md-4 about-me-photo">
                        <img src="./images/Proposal.JPG" alt="Proposal" className="img-thumbnail"></img>
                        {/* <img src="./images/Kiss.jpg" alt="Kiss" className="img-thumbnail"></img> */}
                    </div>
                    <div className="col-md-8">
                        <p style={OurStoryStyles.Paragraph}>
                            Sean finally asked Ashley to marry him under the golden gate bridge in the presence of her brother and mom,
                            under the guise of taking Family Christmas photos, and we are so excited to spend our lives together.
                            COVID has made wedding planning much more of stressful endeavor that we could have ever imagined.
                            But we were able to secure our wedding date at the Trocadero Club house in Stern Grove park in San Francisco
                            for our ceremony and dinner under the  Redwood Trees, with drinks and dancing to continue inside the clubhouse as the sun sets and the
                            fog rolls in.
                            </p>
                    </div >
                </section >
                {/* // </div > */}
            </main >
        </div >
    )
}

export default OurStory
