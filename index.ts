#! /usr/bin/env node
import inquirer from "inquirer";

type ans = {
  Paragraph: string;
};

let answer: ans = await inquirer.prompt([
  {
    name: "Paragraph",
    type: "input",
    message: "Enter any Sentence for word counter",
  },
]);

let FinalWords = answer.Paragraph.trim().split(" ");
console.log(`Your word count is ${FinalWords.length}`);
