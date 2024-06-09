#! /usr/bin/env node
import inquirer from "inquirer";
const computer_number = Math.floor(Math.random() * 10 + 1);
const result = await inquirer.prompt([
    {
        name: " userguessing_number",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
//condition
if (result.cli_guessing_game === computer_number) {
    console.log("congragulation! you guess aright number");
}
else {
    console.log(" wrong number, Try Again");
}
