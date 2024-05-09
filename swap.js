function swapChars(string) {
  const reversedString = string
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

  return reversedString;
}

// console.log(swap("Osay"));
// console.log(swap("Oh what a wonderful day it is"));

// Launch School solution
function swap(words) {
  let wordsArray = words.split(" ");

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(" ");
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// console.log(swapFirstLastCharacters("what"));
// console.log(swap("Oh what a wonderful day it is"));
