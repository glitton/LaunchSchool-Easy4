function stringToInteger(string) {
  const BASE = 10;
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    "+": "+",
    "-": "-",
  };
  let arrayOfNumbers = string.split("").map((char) => DIGITS[char]);

  let value = 0;

  arrayOfNumbers.forEach((num) => (value = num + BASE * value));
  return value;
}

// console.log(stringToInteger("4321") === 4321);

function hexadecimalToInteger(string) {
  const HEX_BASE = 16;
  const HEX_DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let arrayOfCharacters = string
    .toUpperCase()
    .split("")
    .map((char) => HEX_DIGITS[char]);

  console.log(arrayOfCharacters);
  let hexValue = 0;

  arrayOfCharacters.forEach((char) => (hexValue = char + HEX_BASE * hexValue));
  return hexValue;
}

// console.log(hexadecimalToInteger("4D9f"));

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("-15070"));

//for slice, default for start is 0 and end is string.length
