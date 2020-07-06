const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
function promptUser() {
return inquirer.prompt([
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
        name: "installation",
        message: "Describe the installation process for this project."
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the licensing you would like to use for your application.",
        choices: [
            "MIT",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "The Unlicense"
        ]
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
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "e-mail",
        message: "What is your e-mail??"
    },




]).then(function (data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, generateMarkdown(data), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Read me generation successfull!");

    });
});;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
