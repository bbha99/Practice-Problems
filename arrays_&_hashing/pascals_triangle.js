// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let output = [];
  if (numRows >= 2) {
    output.push([1], [1, 1]);
  } else {
    return [[1]];
  }

  for (let i = 2; i < numRows; i++) {
    let tempArr = [1];
    let prevArr = output[output.length - 1];
    for (let j = 0; j < i - 1; j++) {
      tempArr.push(prevArr[j] + prevArr[j + 1]);
    }
    tempArr.push(1);
    output.push(tempArr);
  }

  return output;
};
