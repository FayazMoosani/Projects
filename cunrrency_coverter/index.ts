import inquirer from "inquirer";

// Object to store currency conversion rates relative to USD
const currency: any = {
    USD: 1,        // Base currency
    PKR: 280,      // Conversion rate for Pakistani Rupee
    EUR: 0.91,     // Conversion rate for Euro
    INR: 74.57,    // Conversion rate for Indian Rupee
    GBP: 0.76,     // Conversion rate for British Pound
};

// Prompt the user for currency conversion details
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "INR", "GBP"], // List of available currencies
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "INR", "GBP"], // List of available currencies
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number' // Amount to convert
    }
]);

// Retrieve the conversion rates for the selected currencies
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;

// Convert the entered amount to the base currency (USD)
let baseAmount = amount / fromAmount;

// Convert the base amount to the target currency
let convertedAmount = baseAmount * toAmount;

// Print the converted amount
console.log(convertedAmount);

// Code with FM => FAYAZ MOOSANI