const express = require("express");
const { connectDB } = require("./db/db.js");
const user = require("./models/user.model.js");

const app = express();

app.use(express.json());

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

// app.post("/create", (req,res) => {
//     let data = new user(req.body);
//     let result = data.save();
//     console.log(req.body);
//     res.send(result);
// })





app.get(`/`,async (req, res) => {
    let data =await User.find();
    res.send(data)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port Number ${PORT}`);
});