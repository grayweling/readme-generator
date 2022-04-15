// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (data.license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (data.license === "GPL-3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
  } else if (data.license === "LGPL-3.0") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]";
  } else if (data.license === "BSD-3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  } else if (data.license === "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  } else if (data.license === "WTFPL") {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (data.license === "APACHE 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPL-3.0") {
    return "(https://opensource.org/licenses/GPL-3.0)";
  } else if (data.license === "LGPL-3.0") {
    return "(https://opensource.org/licenses/LGPL-3.0)";
  } else if (data.license === "BSD-3-Clause") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "Unlicense") {
    return "(https://unlicense.org/)";
  } else if (data.license === "WTFPL") {
    return "(https://www.wtfpl.net/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (data) => {
  if (!data.license) {
    return "";
  } else {
    return `## License ${renderLicenseBadge(data)}
    ${data.license} ${renderLicenseLink(data)}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  -----------------------

  ## Description

  ${data.description}

  -----------------------

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Github profile](#github-profile)

  -----------------------

  ## Installation

  ${data.installation}

  -----------------------

  ## Usage

  ${data.usage}

  -----------------------

  ${renderLicenseSection(data)}

  -----------------------

  ## Contributing

  ${data.contributing}

  -----------------------

  ## Tests

  ${data.tests}

  -----------------------

  ## Questions

  If you have any questions, please contact me here or by email at : ${data.email}

  -----------------------

  ## GitHub Profile

  [${data.username}](http://github.com/${data.username})

  -----------------------
`;
}

module.exports = generateMarkdown;
