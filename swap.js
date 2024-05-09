function swap(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

console.log(swap("Osay"));
console.log(swap("Oh what a wonderful day it is"));
