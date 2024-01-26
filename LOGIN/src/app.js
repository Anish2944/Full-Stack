const express = require("express");
const { connectDB } = require("./db/db.js");
const User = require("./models/user.model.js");

const app = express();


connectDB();

const newUser = [{
    name: "Anish Kushwaha",
    email: "anishkh0276@gmail.com",
    age: 21,
}, {
    name: "Example 1",
    email: "example@gmail.com",
    age: 27,
}];

// User.insertMany(newUser);













app.get(`/`, (req, res) => {
    res.send(newUser)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port Number ${PORT}`);
});