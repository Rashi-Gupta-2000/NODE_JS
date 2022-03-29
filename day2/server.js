//console.log("Server Excuted")

const http = require("http");
const fs = require("fs");

const myserver = http.createServer( (request,response) => {
    response.writeHead(200, { 'Content-Type': "text/html"})
    
    var myurl = request.url;

    if(myurl === "/about"){
        response.write("<h2>About Page</h2>")
    }else if(myurl === "/home"){
        response.write("<h2>Home Page</h2>")
    }else if(myurl === "/dashboard"){
        response.write("<h2>Dashboard Page</h2>")
    }else if(myurl === "/form"){
        const content = fs.readFileSync("./htmlpages/index.html");
        response.write(content)
    }else if(myurl === "/register"){
        response.write("Registration Completed!")
    }else if(myurl === "/done"){
        const content = fs.readFileSync("./htmlpages/done.html");
        response.write(content)
    }else {
        response.write("<h2>SERVER WORKED</h2> <p>" + myurl +"</p>")
    }

    //response.write("<h2>SERVER WORKED</h2>")
    response.end();
})

myserver.listen(3000);

myserver.on("connection", (result) => {
    console.log("Connection Established")
    //console.log(result);
})









