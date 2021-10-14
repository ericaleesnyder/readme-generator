// TODO: Include packages needed for this application
// inquirer
// fs
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
// title of project (input - displayed as title of readme)
//  Description (input)
//  Table of Contents (links to sections of the document)
//  Installation (input)
//  Usage (input)
//  License (select one)
//  Contributing (input)
//  Tests (input)
//  Questions
  // GitHub username (input - link)
  // email address (input - includes instructions on how to reach me)
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of your application?"
  },
  {
    name: "installation",
    type: "input",
    message: "What are the steps required to install your application?"
  },
  {
    name: "useage",
    type: "input",
    message: "What is the useage of this application?"
  },
  {
    name: "license",
    type: "list",
    message: "What is license of your application?",
    choices: ["a", "b", "c"]
  },
];
inquirer.prompt(questions)
.then((answers) => console.log(answers))

// TODO: Create a function to write README file
// use template literals and variables based on user input (refer to miniproject)
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
