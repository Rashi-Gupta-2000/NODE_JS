// Using express to create a server/app

const express = require("express");
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//MIDDLEWARE
app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log("Router Called", Date.now())
    next()
})

app.use('/home', (req, res, next) => {
    console.log("Middleware called for home")
    next()
})

app.use('/', (req, res, next) => {
    console.log("Middleware called for root -step1")
    next();
}, (req, res, next) => {
    console.log("Middleware called for root - step 2")
    next();
}, (req, res, next) => {
    console.log("Middleware called for root - step3")
    next()
})

app.use("/test", (req, res, next) => {
    req.query.fullname = req.query.fullname.toLowerCase();
    req.requestTime = Date.now();
    res.send("You are not allowed")
    //next();
})

app.get("/test", (req, res) => {
    console.log(req.requestTime)   // once declared in the global middleware can be used as a variable anywhere in the document
    res.send("The full name is " + req.query.fullname)
})

app.get("/", (request,response) => {
    response.send(`<h2>WELCOME TO EXPRESS DEMO</h2> <br> <a href="/form">Registration Form</a>`)
})

//different routes
app.get("/home", (req,res) => {

    let fullname = req.query.fullname;
    res.send("<b>Home Page </b>" + fullname+ ":" +req.query.age)  
    // http://localhost:3000/home?fullname=Rashi&age=21
})

app.get("/login/:email/:password", (req,res) => {
    
    let email = req.params.email;
    let pwd = req.params.password;
    res.send("login " + email + pwd)
})

/*
app.post("/register", (req,res) => {
    //let fullname = req.body.fullname;
    //res.send(fullname);
    res.send(req.body);
})
*/

app.post("/register", (req, res) => {
    let fname = req.body.fname
    let lname = req.body.lname
    let email = req.body.email
    let number = req.body.number
    res.send("Hi " + fname + " " + lname + "<br>" + "Your email is " + email + " phone no. is " + number)
})

// develop a page without using fs

app.get("/form", (req,res) => { 
    console.log(__dirname)
    res.sendFile(__dirname + "/htmlpages/index.html") // needs the full path and can't be hard coded 
})

app.listen(3000, (e) => {
    console.log("Server Started")
})