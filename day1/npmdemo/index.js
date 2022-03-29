/*  
    - Create a nice functionality  
    - Publish the function as NPM Repo with your account to npmjs.org
    - Create a New project where the package has been used (the one you just published)
    - Create a NodeJS based image with source-code in it as hardcoded code in the docker image
    - publish the docker image to the docker hub
    - create a container out of it locally, if you can create in EC2, first create EC2 instance and then create a container in EC2
    - Once EC2/local container created, run the app and showcase the Shell based output of your NPM package from the project in which you implemented it.
*/

function calculate(total, tax, currency){
    return total + total * (tax/100) + " " + currency
}
console.log(calculate(100,10,"Rs."))

/*
module.exports.calculate = function(total, tax, currency){
    return total + total*(tax/100) + "  " + currency
}
*/