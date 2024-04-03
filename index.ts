import inquirer from "inquirer";

let currentBalance = 450000;
const pinCode = 478;
let answer = await inquirer.prompt([
  {
    message: "Enter your PIN",
    name: "pin",
    type: "number",
  },
]);

if (answer.pin === pinCode) {
  console.log("Correct pin code!");

  let correctPin = await inquirer.prompt([
    {
      message: "What you want to do?",
      name: "command",
      type: "list",
      choices: ["Withdraw money", "Check balance","Fast cash"],
    },
  ]);

  if (correctPin.command === "Withdraw money") {
    let withdrawMoney = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "How much money do you want to withdraw?",
      },
    ]);
  if (withdrawMoney.amount < currentBalance) {
    console.log(`Now your current balance is ${currentBalance - withdrawMoney.amount}`);
  } else {
    console.log("You don't have enough money in the account!");
  }
}else if (correctPin.command === "Fast cash") {
    let fastCash = await inquirer.prompt([
      {
        type: "list",
        name: "fast_cash",
        message: "Choose the amount you want to withdraw!",
        choices: [10000, 5000, 1000],
      },
    ]);
    console.log(`Now your current balance is ${ currentBalance - fastCash.fast_cash}`)
  }
  else if ( correctPin.command=== "Check balance") {
    console.log(`Your current balance is ${currentBalance}`);
  }
} else {
  console.log("Wrong pin!");
}

