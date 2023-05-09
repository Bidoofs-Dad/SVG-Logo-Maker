const inquirer = require("inquirer");
const fs = require("fs");

const portfolio = [
    {
        type: "input",
        name: "fullName",
        message: "What is your first and last name?",
    },
    {
        type: "input",
        name: "location",
        message: "Where do you live?",
    },
    {
        type: "input",
        name: "bio",
        message: "Say a little bit about yourself!",
    },
    {
        type: "input",
        name: "linkedInURL",
        message: "Include your a link to your LinkedIn!",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your repository",
        choices: ["Mozilla Public License 2.0",
            "Apache License 2.0", "MIT License", "None"]
    },
    {
        type: "input",
        name: "gitHubURL",
        message: "Include your a link to your GitHub!",
    }
];

inquirer.prompt(portfolio).then((response) => {
    const portfolioRequested = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <style>
            body {
                text-align: center;
                background-color: aqua;
                color: rgb(65, 2, 41);
            }
        </style>
    </head>
    <body>
    <h1>Portfolio</h1>
    <br>
    <h2>${response.fullName}</h2>
    <br>
    <h2>Location: ${response.location}</h2>
    <br>
    <h2>A short bio about me: ${response.bio}</h2>
    <br>
    <h2>LinkedIn URL: ${response.linkedInURL}</h2>
    <br>
    <h2>GitHub URL: ${response.gitHubURL}</h2>
    </body>
    </html>`;

    fs.writeFile("index.html", portfolioRequested, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
});