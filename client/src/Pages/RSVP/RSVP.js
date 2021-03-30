import React, { useState } from 'react'


const RSVP = () => {

    //use onSubmit to set state
    const [rsvpForm, setrsvpForm] = useState({
        name: "",
        email: "",
        message: ""
    });

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
        console.log(newRSVP)
        fetch(`/api/rsvps`, {
            method: "POST",
            body: JSON.stringify(newRSVP),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(`${rsvpForm.message} saved`)

            })
        window.location.reload();

    };

    return (
        <div>
            <h1>Send us a note!</h1>
            <br></br>
            <form onSubmit={submit}
                className="form-group justify-content-center">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control col-md-8 mx-auto"
                    id="name"
                    placeholder="name"
                    onChange={onChange}>
                </input>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control col-md-8 mx-auto"
                    id="email-input"
                    placeholder="Email"
                    onChange={onChange}
                >
                </input>
                <label>Message</label>
                <input
                    type="text"
                    name="message"
                    className="form-control col-md-8 mx-auto"
                    id="message-input"
                    placeholder="Message"
                    onChange={onChange}
                >
                </input>
                {/* Button to submit the form */}
                <button type="submit" className="btn btn-primary signup"
                    onClick={submit}>
                    Submit
                </button>
            </form>
            <img src="./images/rsvp.jpg" alt="rsvp" className="border-dark img-thumbnail col-md-5"></img>
        </div>
    )
}

export default RSVP
