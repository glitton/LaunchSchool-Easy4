function runningTotal(arr) {
  let resultArray = [];
  let sum = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    resultArray.push((sum += arr[idx]));
  }
  return resultArray;
}

// console.log(runningTotal([14, 11, 7, 15, 20]));

// const runningTotalUsingMap = (arr) => {
//   let resultArray = [];
//   let sum = 0;
//   arr.map((idx) => resultArray.push((sum += arr[idx])));
//   return resultArray;
// };

// console.log(runningTotalUsingMap([2, 7, 13]));
