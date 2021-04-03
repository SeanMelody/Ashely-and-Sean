const router = require("express").Router()
const db = require("../models")
const nodemailer = require("nodemailer")
require("dotenv").config();

// Test get request, sends back success
router.get("/test", (req, res) => {
    res.send({ msg: "success" });
});
// GET /RSVP to get all the saved RSVP
router.get("/rsvps", (req, res) => {
    db.RSVP.find({})
        .then(dbRSVP => {
            res.json(dbRSVP);
        })
        .catch(err => {
            res.json(err);
        })
});

// POST /rsvps to send a message to the database
router.post("/rsvps", (req, res) => {
    console.log(req.body)
    const newRSVP = req.body
    console.log(newRSVP)
    db.RSVP.create(newRSVP)
        .then(dbRSVP => {
            console.log("RSVP Saved"),
                res.json(dbRSVP)
        })
        .catch(err => {
            res.json(err)
        })
})

// Transporter for emailing a new mesasge to us!
// Messages sent via my throw away email: dzesean@gmail.com
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "dzesean@gmail.com",
        pass: process.env.EPASS,
    }
})

// The post request to get the message from the front end
router.post("/message", (req, res, next) => {
    // console.log("api/message hit")
    // console.log(req.body)

    // Set the new message
    const newMessage =
        `From: ${req.body.name} 
        email: ${req.body.email} 
        message: ${req.body.message}`

    // Set the message subject!
    const messageSubject = `New Message from ${req.body.name}`

    // Set the mail options to come from my garbage email, and go to our wedding email
    const mailOptions = {
        from: "dzesean@gmail.com",
        to: "cookerlymelody@gmail.com",
        subject: messageSubject,
        text: newMessage
    }
    // Send the mail and check for errors with transporter and nodemailer
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log("email sent")
        }
    })
})

module.exports = router