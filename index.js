const inquirer = require("inquirer");
const fs = require("fs");

const logoQuestions = [
    {
        type: "input",
        name: "title",
        message: "What would you like your logo to say? (Up to 3 characters)",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be? (Can be a color or a hexadecimal code)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape you would like in your logo!",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color would you like your shape to be? (Can be a color or a hexadecimal code)",
    }
];

inquirer.prompt(logoQuestions).then((response) => {

    fs.writeFile("test.svg", logoRequested, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
});