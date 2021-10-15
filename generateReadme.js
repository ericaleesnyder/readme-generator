function createBadge(answers) {
  const gpl3 =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const mit =
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    let badge;
    if (answers.badge === "MIT") {
      badge = mit;
    } else if (answers.badge === "GPL v3") {
      badge = gpl3;
    } else {
      badge = "";
    }
    return badge;
}

function createInstall(answers) {
  let install
  if (answers.installation === "none") {
    install = ``
  } else {
    install = `## Installation

In order to install this product, you need to:
${answers.installation}`
  }
  return install
}

function createLicense(answers) {
  let license;
  if (answers.badge === "No License") {
    license = ``;
  } else {
    license = `## License

The license for this application is ${answers.badge}.`
  }
  return license;
}

function createContribute(answers) {
  let content;
  if (answers.contributing === "contributor covenant"){
    content = "## Contributing \n\nPlease refer to the [Contributor Covenant](https://www.contributor-covenant.org/) for contribution guidelines."
  } else {
    content = ``;
  }
  return content;
}

function createTests(answers) {
  let tests 
  if (answers.tests === "none") {
    tests = `` 
  } else {
    tests = `## Tests

The following are tests I have developed for this application:
  ${answers.tests}`
}
  return tests
}

function generateReadme(answers) {
  return `# ${answers.title}

${createBadge(answers)}

## Description

${answers.motivation}

${answers.why}

${answers.problem}

${answers.learned}

The deployed version of the application can be found at:
https://ericaleesnyder.github.io/${answers.title}/

## Table of Contents 
Remove sections that are not applicable.
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

${createInstall(answers)}

## Usage 
Add screenshots as appropriate using the following syntax: 
![alt text](relative path)

${answers.usage}

${createLicense(answers)}

${createContribute(answers)}

${createTests(answers)}

## Questions

If you have any questions about this application, my github profile is https://github.com/${answers.github}, and you can email me at ${answers.email}. `;
}
 
module.exports = generateReadme;