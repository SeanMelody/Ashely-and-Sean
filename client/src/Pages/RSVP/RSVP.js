import React, { useState } from 'react'
import { useHistory } from "react-router-dom";




const RSVP = () => {

    //use onSubmit to set state
    const [rsvpForm, setrsvpForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Use history to be able to redirect if not logged in
    const history = useHistory()


    // Set the change for state
    const onChange = (e) => {
        setrsvpForm({ ...rsvpForm, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        // console.log(rsvpForm)
        let newRSVP = {
            name: rsvpForm.name,
            email: rsvpForm.email,
            message: rsvpForm.message
        }

        // console.log(newRSVP)

        //Send the message to our email!
        fetch(`/api/message`, {
            method: "POST",
            body: JSON.stringify(newRSVP),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then((data) => {

                // console.log(`${rsvpForm.message} saved`)

            })
        // alert("email sent!")




        // Save the message to the database
        fetch(`/api/rsvps`, {
            method: "POST",
            body: JSON.stringify(newRSVP),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(`${rsvpForm.message} saved`)

            })
        alert(`${rsvpForm.name} your new message has been saved!`)
        history.push("/covidq-a")


    };

    return (
        <div>
            <h1 className="google-font">Send us a note!</h1>
            <br></br>
            <form onSubmit={submit}
                className="form-group justify-content-center">
                <h3 className="google-font">Name</h3>
                <input
                    type="text"
                    name="name"
                    className="form-control col-md-8 mx-auto"
                    id="name"
                    placeholder="name"
                    onChange={onChange}>
                </input>
                <h3 className="google-font">Email</h3>
                <input
                    type="email"
                    name="email"
                    className="form-control col-md-8 mx-auto"
                    id="email-input"
                    placeholder="Email"
                    onChange={onChange}
                >
                </input>
                <h3 className="google-font">Message</h3>
                {/* <input
                    type="text"
                    name="message"
                    className="form-control col-md-8 mx-auto"
                    id="message-input"
                    placeholder="Message"
                    onChange={onChange}
                >
                </input> */}
                <textarea
                    type="text"
                    name="message"
                    className="form-control col-md-8 mx-auto large"
                    id="message-input"
                    placeholder="Message"
                    onChange={onChange}
                    rows="3">
                </textarea>
                {/* Button to submit the form */}
                <button type="submit" className="btn btn-primary signup"
                    onClick={submit}>
                    Submit
                </button>
            </form>
            <img src="./images/rsvp0.jpg" alt="rsvp" className="border-dark img-thumbnail col-md-5"></img>
        </div>
    )
}

export default RSVP
