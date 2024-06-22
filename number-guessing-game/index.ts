#!/usr/bin/env node

import inquirer from "inquirer";

// Generate a random number between 0 and 9
const randomNumber = Math.floor(Math.random() * 10);

// Prompt the user to guess a number between 1 and 10
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number between 1 to 10",
  },
]);

// Check if the user's guessed number matches the random number
if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed the right number " + randomNumber); // Print the correct number
    console.log("Congratulations you win"); // Print a congratulatory message
} else {
    console.log("The right number is " + randomNumber); // Print the correct number
    console.log("You guessed the wrong number please try again"); // Print a try again message
}

// Code With Fayaz Moosani
