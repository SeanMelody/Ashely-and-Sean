const router = require("express").Router()
const db = require("../models")

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


module.exports = router