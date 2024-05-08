// function isPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("madam i'm adam"));
// console.log(isPalindrome("356653"));

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, ""); //remove spaces and special chars
  const reversedCleanString = string.split("").reverse().join(""); // reverse and join
  return string.toLowerCase() === reversedCleanString; //compare
}

// console.log(isRealPalindrome("Madam"));
// console.log(isRealPalindrome("Madam, I'm Adam"));

const isPalindromicNumber = (num) => {};
