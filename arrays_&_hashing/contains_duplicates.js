// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueNumbers = new Set();

  for (const val of nums) {
    if (uniqueNumbers.has(val)) {
      return true;
    }
    uniqueNumbers.add(val);
  }
  return false;
};
