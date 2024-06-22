#!/usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000; // Initial total balance in dollars
let pinNumber = 1234; // Pre-set PIN number
async function atmMachine() {
    try {
        // Prompt user to enter their PIN
        let pinEntered = await inquirer.prompt([
            {
                name: "pin",
                message: "Please Enter Your Pin",
                type: "number",
            },
        ]);
        // Check if the entered PIN matches the pre-set PIN
        if (pinEntered.pin === pinNumber) {
            // Prompt user to select account type and transaction method
            let atmQuestions = await inquirer.prompt([
                {
                    name: "accountType",
                    message: "Select Your Account Type",
                    type: "list",
                    choices: ["Current Account", "Saving Account"],
                },
                {
                    name: "transactionMethod",
                    message: "Select Your Transaction Method",
                    type: "list",
                    choices: ["Cash Withdrawal", "Fast Cash"],
                },
            ]);
            // If the user selects Cash Withdrawal
            if (atmQuestions.transactionMethod === "Cash Withdrawal") {
                // Prompt user to enter the amount for cash withdrawal
                let cashWithdrawAmount = await inquirer.prompt([
                    {
                        name: "withdrawal",
                        message: "Enter the amount you want to withdraw",
                        type: "number",
                    },
                ]);
                // Check if the total balance is sufficient for the withdrawal
                if (totalBalance >= cashWithdrawAmount.withdrawal) {
                    totalBalance -= cashWithdrawAmount.withdrawal; // Deduct the withdrawal amount from total balance
                    console.log(`Your Total Balance is: ${totalBalance}`); // Print the remaining balance
                }
                else {
                    console.log("Insufficient Balance"); // Print insufficient balance message
                }
            }
            else {
                // If the user selects Fast Cash
                // Prompt user to select the amount for fast cash withdrawal
                let fastCashAmount = await inquirer.prompt([
                    {
                        name: "fastCash",
                        message: "Select the amount you want to withdraw",
                        type: "list",
                        choices: ["1000", "2000", "3000", "5000", "10000", "20000"],
                    },
                ]);
                let amountToWithdraw = parseInt(fastCashAmount.fastCash, 10); // Convert selected amount to an integer
                // Check if the total balance is sufficient for the withdrawal
                if (totalBalance >= amountToWithdraw) {
                    totalBalance -= amountToWithdraw; // Deduct the withdrawal amount from total balance
                    console.log(`Your Total Balance is: ${totalBalance}`); // Print the remaining balance
                }
                else {
                    console.log("Insufficient Balance"); // Print insufficient balance message
                }
            }
        }
        else {
            console.log("Invalid Pin"); // Print invalid PIN message
        }
    }
    catch (error) {
        console.error("An error occurred:", error); // Print any errors that occur
    }
}
// Run the ATM machine function
atmMachine();
//          Code With FM => FAYAZ MOOSANI
