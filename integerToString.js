function intToString(number) {
  let string = "";
  string = string + number;
  console.log(typeof string);
  return string;
}

// console.log(integerToString(5678));

//Launch School Version
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case 1:
      return `+${integerToString(number)}`;
    default:
      return `${integerToString(number)}`;
  }
}

console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(2356) === "+2356");
console.log(signedIntegerToString(-0) === "-0");
