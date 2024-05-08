// function isPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("356653"));
