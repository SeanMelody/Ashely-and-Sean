// import all the Goodness
import React from 'react'
import FooterStyles from "./FooterStyles"
// import ReactMomentCountDown from 'react-moment-countdown';
import Moment from 'react-moment'

const Footer = () => {
    // const dateToFormat = '2021-10-09';
    return (
        <footer style={FooterStyles.Footer}>

            <hr></hr>
            {/* <Moment format="MM/DD/YYYY">
                2021-10-09
            </Moment> */}
            {/* <Moment fromNow unit='days'>2021-10-09T12:59-0500</Moment> */}
            {/* <Moment diffNow unit="days">2021-10-09T12:59-0500</Moment> */}
            {/* <Moment date="2021-10-09"
                durationFromNow
            /> */}

            <div className="row col-md-12 justify-content-center google-font-reg">
                <h4>Our wedding is in: </h4>
                <Moment date="2021-10-09"
                    format="DDD"
                    durationFromNow
                    className="footer-days"
                /><h4> days!!!</h4>
            </div>

            <h4 className="row col-md-12 justify-content-center google-font-reg ">Ashley Cookerly &#9829; Sean Melody</h4>
            {/* <Moment date="2021-10-09"
                format="DDD"
                durationFromNow
            /><p>days left!!!</p> */}
        </footer>
    )
}

export default Footer
