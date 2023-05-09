const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG")

const logoQuestions = [
    {
        type: "input",
        name: "title",
        message: "What would you like your logo to say? (Up to 3 characters)",
        validate: function(input) {
            if (input.length > 3) {
                return "Only a maximum of 3 characters allowed";
             }
             return true
        }
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
        name: "shapeColor",
        message: "What color would you like your shape to be? (Can be a color or a hexadecimal code)",
    }
];

inquirer.prompt(logoQuestions).then((response) => {

    fs.writeFile("logo.svg", generateSVG(response), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
});