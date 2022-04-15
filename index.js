//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a small description of your project.",
    "What are the steps required to install your project?",
    "What is the usage of your project?",
    "What license will you be using for your project?",
    "How can someone contribute to your project?",
    "How can someone test your project?",
    "Enter your GitHub username:",
    "Enter your email address:",
];

const licenses = [
    "MIT",
    "APACHE 2.0",
    "GPL-3.0",
    "LGPL-3.0",
    "BSD-3-Clause",
    "Unlicense",
    "WTFPL",
]

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("README.md", data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Successfully wrote to README.md"
            });
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "input",
            name: "description",
            message: questions[1],
        },
        {
            type: "input",
            name: "installation",
            message: questions[2],
        },
        {
            type: "input",
            name: "usage",
            message: questions[3],
        },
        {
            type: "list",
            name: "license",
            message: questions[4],
            choices: licenses,
        },
        {
            type: "input",
            name: "contributing",
            message: questions[5],
        },
        {
            type: "input",
            name: "tests",
            message: questions[6],
        },
        {
            type: "input",
            name: "username",
            message: questions[7],
        },
        {
            type: "input",
            name: "email",
            message: questions[8],
        }
    ])
}

// Function call to initialize app
init()
    .then((data) => {
        return generateMarkdown(data);
    })
    .then((markdown) => {
        return writeToFile(markdown);
    })
    .catch((err) => {
        console.log(err);
    });
