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
    message: "What is the name of your application's github repository?"
  },
  {
    name: "description",
    type: "input",
    message: "Please write a brief description of your file"
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
  {
    name: "contributing",
    type: "input",
    message: "Please list any contributors",
  },
  {
    name: "tests",
    type: "input",
    message: "Are there any tests that can be performed?",
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
  //
  const fileName = "./output/README.md";
  // COPY IN CONTENT FROM SAMPLE README FILE INTO FILECONTENT, REPLACE PLACEHOLDERS WITH ANSWERS.NAMES
  const fileContent = 
  `# ${answers.title}

### Description

${answers.description}

The deployed version of the application can be found at:
https://ericaleesnyder.github.io/${answers.title}/

## Table of Contents
1. Installation
2. Useage
3. License
4. Contributing
5. Tests
6. Questions

### Useage

${answers.useage}

### License

The license for this application is ${answers.license}

### Contributing

Other contributors to this application are:
${answers.contributing}

### Tests

You can run the following tests to ensure the application is functioning properly:
${answers.tests}

### Questions

If you have any questions about this application, my github profile is ${answers.github}, and you can email me at ${answers.email}.
`;

  fs.writeFile(fileName, fileContent, (err) =>
  err ? console.error(err) : console.log(`Readme saved as ${fileName}`))
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
