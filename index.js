var inquirer = require("inquirer");
var fs = require('fs');
// array of questions for user
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of the project."
    },
    {
        type: "input",
        name: "table of contents",
        message: "What items would you like to make up your table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process for this project."
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?"
    },
    {
        type: "input",
        name: "license",
        message: "Licensing.  What is the user allowed to do with the project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like other users to contribute?  If so, explain how."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests for users here, to demo the project and its use."
    },
    {
        type: "input",
        name: "questions",
        message: "Put any questions here."
    },



]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
