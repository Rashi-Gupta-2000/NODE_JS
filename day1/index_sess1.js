console.log("Hi");

function math(op, v1,v2){
    if(op === "add")
        return v1+v2
    else if(op === "sub")
        return v1 - v2
    else
        return v1*v2
}

let res = math("add",10,40);
console.log(`Result is ${res}`);

//this -> window object : if no parent then window object is the parent
//console.log(window)       ==> error

//var myname = "Mayur"
console.log(global);

const helper = require("./Helper.js");

helper.logvalue("say hey");

const os = require("os");
console.log(os.freemem());
console.log(os.hostname());
console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.homedir());

const dns = require("dns")

dns.lookup("google.com",(err,address,family) =>{
    console.log(JSON.stringify(address))
    console.log('address: %j family: IPv%s', address,family)
});

const fs = require("fs");

console.log(__dirname);
// In snycronous calling line 45 will not be excuted until 44 is fully completed i.e. we don't get everything in the folder
// BLOCKING MODE
console.log(fs.readdirSync(__dirname))
console.log("Data read completed")

//Async call does not wait for the function to return everything but gets to the nest line for execution
fs.readdir(__dirname,function(err,list){
    console.log(list)
})

console.log("End of Async Call")


const EventEmitter = require("events");
const EventHelper = require("./event_helper.js");
/*
const emitter = new EventEmitter();

//Subscribe
emitter.on("logrecord",(obj) => {
    console.log("Subscription Worked") ------ because of different instances of eventemitter 
    console.log(obj.currentlog)
})

helper.printlogs("This is a new log")
*/

const eventobj = new EventHelper();

eventobj.on("log recorded", (result) => {
    console.log(JSON.stringify(result))
})

eventobj.triggerEvent("DATA PASSED");