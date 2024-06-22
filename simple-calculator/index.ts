#!/usr/bin/env node

import inquirer from "inquirer";

// Prompt the user to enter two numbers and choose an operator
const answer = await inquirer.prompt([
  { 
    message: "Enter your first number", 
    type: "number", 
    name: "firstNumber" 
  },
  { 
    message: "Enter your second number", 
    type: "number", 
    name: "secondNumber" 
  },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Perform the operation based on the selected operator and print the result
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber); // Perform addition
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber); // Perform subtraction
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber); // Perform multiplication
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber); // Perform division
} else {
  console.log("Please select a valid operator"); // Handle invalid operator selection
}

// Code With FM => Fayaz Moosani
