// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Please enter your project title:",
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Please enter a brief description about your project:",
        },
        {
            type: "input",
            name: "installationRequirements",
            message: "Please provide details on any dependcies to install to run this application:"
        },
        {
            type: "input",
            name: "repoUsage",
            message: "Please provdie details on the usage of the repo for any users:"
        },
        {
            type: "input",
            name: "projectContributors",
            message: "Please enter the names of the contributors:"
        },
        {
            type: "input",
            name: "projectTests",
            message: "Please provide details on all tests and how to execeute:"
        },
        {
            type: "checkbox",
            name: "licenseUsage",
            message: "Please select a license for your application:",
            choices: ["MIT", "Apache", "None"],
        },
        {
            type: "checkbox",
            name: "programmingLanguages",
            message: "Please check off all that were used to build this applicaton:",
            choices: ["Javascript", "HTML", "CSS", "jQuery", "Node.js",],
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Please enter your github username:",
            validate: (githubUser) => {
                if (githubUser) {
                    return true;
                } else {
                    console.log("Please enter your github username!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "githubRepolink",
            message: "Please enter your github repository link:",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "Please enter your email address",
        }
    ]);
};


// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile("./generatedREADME.md", data, err => {
    if (err) {
        console.log(err);
    }else {
        console.log("File written successfully");
    }
    });
};

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((response) => generateMarkdown(response))
    .then((res) => {
      writeToFile(res);
    });
}

// Function call to initialize app
init();
