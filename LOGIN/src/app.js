const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./db/db.js");

const user = require("./models/user.model.js");
const static_path = path.join(__dirname, "../public") 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));


connectDB();

// const newUser = [{
//     name: "Anish Kushwaha",
//     email: "anishkh0276@gmail.com",
//     age: 21,
// }, {
//     name: "Example 1",
//     email: "example@gmail.com",
//     age: 27,
// }];

// User.insertMany(newUser);

// app.post("/create", (req,res) => {
//     let data = new user(req.body);
//     let result = data.save();
//     console.log(req.body);
//     res.send(result);
// })

app.post("/submit",async (req,res)=>{
    let data = new user({
        name: req.body.username,
        email: req.body.email,
        age: req.body.age
    });
    console.log(`Data is saved`);
    data.save();
    res.redirect(`/`); 
});



app.get(`/`,async (req, res) => {
    let data =await User.find();
    res.send(data)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port Number ${PORT}`);
});