let input = require("readline-sync");

function searchNumbers() {
  let numberArray = [];

  let firstNumber = input.question("Enter the 1st number: ");
  numberArray.push(firstNumber);

  let secondNumber = input.question("Enter the 2nd number: ");
  numberArray.push(secondNumber);

  let thirdNumber = input.question("Enter the 3rd number: ");
  numberArray.push(thirdNumber);

  let fourthNumber = input.question("Enter the 4th number: ");
  numberArray.push(fourthNumber);

  let fifthNumber = input.question("Enter the 5th number: ");
  numberArray.push(fifthNumber);

  let sixthNumber = input.question("Enter the last number: ");

  let result = numberArray.includes(sixthNumber);

  if (result) {
    console.log(`The number ${sixthNumber} appears in ${numberArray}. `);
  } else {
    console.log(
      `The number ${sixthNumber} does not appear in ${numberArray}. `
    );
  }
}

searchNumbers();
