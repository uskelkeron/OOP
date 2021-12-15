
const prompt = require("prompt-sync")();
const Mortgage = require("./MortgageObject/mortgageClass.js");

const main = (()=>{

    const loan = parseFloat(prompt("Please Enter Loan Amoun: "));
    const firstLoan = new Mortgage(loan);

    


    console.log(` The Loan Deposit for value ${loan} is : ${firstLoan.CalculateDeposit()}`);
})();