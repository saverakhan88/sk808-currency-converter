#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to Savera's Currency converter\n"));


const currency: any  = {
    USD:1,  //BASE CURRENCY
    EUR:0.9,  //European Currency
    JYP:113,  //Japanese Currency
    CAD:1.3,  //Canadian Rupees
    AUD:1.65,   //Australian Rupees
    PKR:277.70,  //Pakistani Rupees
};


let userAnswer =  await inquirer.prompt(
    [
     
        {
          name:"from",
          message: "Select the currency to convert from:",
          type: "list",
          choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
       },
        {
            name: "to",
            message:"Select the currency to convert into:",
            type:"list",
            choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
        },
        {
             name: "amount",
             message: "Enter the  amount to convert:",
             type: "number"
        }
  
    ]
);



//Perform currency converter by using formula
let fromAmount = currency[userAnswer.from]     //exchange rate
let toAmount = currency[userAnswer.to]         //exchange rate
let amount = userAnswer.amount

//Formula of conversion
let baseAmount = amount / fromAmount  // USD BASE CURRENCY
let convertedAmount = baseAmount * toAmount

//Display the converted amount
console.log(convertedAmount);




