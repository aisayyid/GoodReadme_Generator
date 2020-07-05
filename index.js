var inquirer = require("inquirer");
var fs = require('fs');
// array of questions for user
inquirer.prompt([
{
    type: "input",
    name: "title",
    message: "What is your project title?"



}
    ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
