const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Function used to validate Email is real
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

//Creating the Schema for the DB
const RSVPSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    message: {
        type: String,
        required: true,
    },

});

const RSVP = mongoose.model("RSVP", RSVPSchema);

module.exports = RSVP;