const mongoose = require("mongoose");





const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/project1");
        console.log(`MongoDB connected Successfully DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
};

module.exports={connectDB};




//,{ useNewUrlParser: true, useUnifiedTopology: true }

//ATLASurl ="mongodb+srv://anishkh0276:YaRWmtdCMfX5NHHd@cluster0.2hqzmac.mongodb.net/?retryWrites=true&w=majority";
// const db = client.db("myDB");
// const collection = db.collection("myCollection");
// collection.insertOne({ name: "John", age: 25 }, (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Inserted document:", result.ops[0]);
// });
module.exports = {connectDB};

