const express = require("express")
const app = express()
const mongoose = require("mongoose")
const db = require("./models")
const path = require("path");

//Port 5005 cause I'm crazy!
const PORT = process.env.PORT || 5005;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Optimize for Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API Routes start with API and live at apiRoutes.js
app.use("/api", require("./routes/apiRoutes"))

// Mongoose connect to wedding API.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wedding", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Let the user know the server is running, and which port.  Yeay!
app.listen(PORT, () => {
    console.log(`listening at http://localhost${PORT}`);
})
