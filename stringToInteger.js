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
  };
  let arrayOfNumbers = string.split("").map((char) => DIGITS[char]);

  let value = 0;

  arrayOfNumbers.forEach((num) => (value = num + 10 * value));
  return value;
}

console.log(stringToInteger("4321") === 4321);
