const express = require("express");
const app = express();

// const myapp = require("express")()  -- can be created in a single line

//const cors = require("./node_modules/cors")
const cors = require("cors")

const helmet = require("helmet")
// import helmet from 'helmet'; -- new format

const mongoose = require("mongoose")

const {Schema} = require("mongoose")  // named export, that's why {}are used

// http://localhost:3000/user1/list

//Lazy Import - using Middleware
// app.use("/user1", require("./router/user"))  -- replaced with index.js file in router folder
// app.use("/hi", require("./router/hello"))

// http://localhost:3000/myassets/website.jpg
app.use("/myassets", express.static("./assets"))  // static file

// http://localhost:3000/admin/hi/seeyou
app.use("/admin", require("./router/index"))

app.use(cors())
app.use(helmet())

app.get("/employee", (req,res) => {

    const EmployeeSchema = new Schema({
        firstname: String,
        lastname: String,
        email: String,
        age: Number,
        isMarried: Boolean
    });

    let Employee =mongoose.model("employee", EmployeeSchema);

    /*
    let Employee = mongoose.model("employee", new Schema({
        firstname: String,
        lastname: String,
        email: String,
        age: Number,
        isMarried: Boolean
    }));
    */

    const AllEmployees = Employee.find({}).then((err, emp) => {
        console.log(emp)
        console.log(err)
    });
    
    res.send("Employee Result")
});

app.get("/user", (req,res) => {
    res.send("Default user object")
})

/*
app.get("/user",cors(), (req,res) => {
    res.send("Default user object")
})
*/

app.get("/", (req,res) => {
    res.send("<h1>Welcome to Node</h1>")
})

app.listen(3000, (err) => {

    mongoose.connect("mongodb://localhost/innovaccer").then(() => {
        console.log("Database connected successfully")
    }).catch( (err) => {
        console.log("Database connection Denied")
        console.log(JSON.stringify(err))
    })
    // monogdb://localhost:port_number/innovaccer
    console.log("Connected...")
})