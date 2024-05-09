function wordSizes(words) {
  let wordsArray = words.split(" ");
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordLength = wordsArray[idx].length;
    if (wordLength === 0) {
      continue;
    }
    if (!count[wordLength]) {
      count[wordLength] = 0;
    }
    count[wordLength] += 1;
  }
  return count;
}

// wordSizes("What's up doc?");

function cleanWordSize(words) {
  let cleanWordsArray = words.split(" ");
  let cleanWordsCount = {};

  for (let idx = 0; idx < cleanWordsArray.length; idx += 1) {
    let cleanWordsLength = removeNonLetters(
      cleanWordsArray[idx].toLowerCase()
    ).length;
    // console.log("length", cleanWordsLength);
    if (cleanWordsLength === 0) {
      continue;
    }
    if (!cleanWordsCount[cleanWordsLength]) {
      cleanWordsCount[cleanWordsLength] = 0;
    }
    cleanWordsCount[cleanWordsLength] += 1;
  }
  return cleanWordsCount;
}

function removeNonLetters(string) {
  let cleanString = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      cleanString += string[idx];
    }
  }
  return cleanString;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

console.log(cleanWordSize("What's up doc?"));
console.log(cleanWordSize("Hey diddle diddle, the cat and the fiddle!"));
console.log(cleanWordSize(""));
