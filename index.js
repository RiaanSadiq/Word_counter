#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Paragraph",
        type: "input",
        message: "Enter any Sentence for word counter",
    },
]);
let FinalWords = answer.Paragraph.trim().split(" ");
console.log(`Your word count is ${FinalWords.length}`);
