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

// searchNumbers();

function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx++) {
    const greaterThanValue = arr[idx] > val;
    let result = arr.some(greaterThanValue);
    console.log(result);
  }
}

let arr = [10, 20, 30, 5, 6];
isIncluded(arr, 18);
