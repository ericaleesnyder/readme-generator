const fs = require('fs')
const inquirer = require('inquirer')
const generateReadme = require("./generateReadme")

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of your application's github repository?"
  },
  {
    name: "motivation",
    type: "input",
    message: "What was your motivation?"
  },
  {
    name: "why",
    type: "input",
    message: "Why did you build this project?"
  },
  {
    name: "problem",
    type: "input",
    message: "What problem does this application solve?"
  },
  {
    name: "learned",
    type: "input",
    message: "What did you learn?"
  },
  {
    name: "installation",
    type: "input",
    message: "Please list steps required for installation. If there are none, type 'none'."
  },
  {
    name: "usage",
    type: "input",
    message: "What is the usage of this application?"
  },
  {
    name: "badge",
    type: "list",
    message: "Please select a license:",
    choices: ["MIT", "GPL v3", "No License"]
  },
  {
    name: "contributing",
    type: "list",
    message: "Please select contribution guidelines.",
    choices: ["contributor covenant", "no contribution"]
  },
  {
    name: "tests",
    type: "input",
    message: "Please list tests that can be performed. If none, please type 'none'.",
  },
  {
    name: "github",
    type: "input",
    message: "What is your github username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email?",
  },
];

inquirer.prompt(questions)
.then((answers) => {
  console.log(answers);
  const fileName = `./output/${answers.title}/README.md`;
  
  const fileContent = generateReadme(answers)
  
  fs.writeFile(fileName, fileContent, (err) =>
  err ? console.error(err) : console.log(`Success! README created: ${fileName}`))
})