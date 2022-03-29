function logvalue(data){
    console.log("listen" +" " + data)
}

module.exports.logvalue = logvalue;


//Create a event so that we can subscribe to it from anywhere
/*
const EventEmitter = require("events");
const emitter = new EventEmitter();

function logdata(log){
    console.log(log);
    emitter.emit("logrecord", {currentlog: log})
}

module.exports.printlogs = logdata;
*/





