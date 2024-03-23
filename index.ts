#! /usr/bin/env node

import inquirer from  "inquirer";
//when you run a program computer will generate a number
// take user input number to guess
//the  number of user and computer comparison and to show result

const randomnumber = Math.floor(Math.random() *10 +1)

const answers = await inquirer.prompt([
    {name: "userguessnumber",
     type: "number",
    message:"please guess a number between 10: "},
])

if(answers.userguessnumber === randomnumber)
{console.log("Congartulations you guessed right number.");}
else{console.log("you have guessed the wrong number");}