#!/usr/bin/env node

import inquirer from "inquirer";

let todos = []; // Initialize an empty array to store todo items

let condition = true; // A condition to keep the loop running

while (condition) {
  // Keep asking questions as long as the condition is true
  
  // Prompt the user with questions
  // inquirer.prompt acts like a waiter asking questions one by one
  let todosQuestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What do you want to add to your todos?",
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Do you want to add more to your todos?",
      default: true,
    },
  ]);

  // Add the answer to the first question to the todos array
  todos.push(todosQuestions.firstQuestion);
  
  // Update the condition based on the answer to the second question
  condition = todosQuestions.secondQuestion;
  
  // Print the current list of todos
  console.log(todos);
}

// Code With FM => Fayaz Moosani
