// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function (s, t) {

  if (s.length !== t.length) return false

  const hashmapS = {};

  for (const val of s) {
      hashmapS[val] = (hashmapS[val] || 0) + 1;
  }

  for (const val of t) {
      if (!hashmapS[val]) {
          return false;
      }
      hashmapS[val] = hashmapS[val] - 1;
      if (hashmapS[val] === 0) {
          delete hashmapS[val];
      }
  }

  return Object.keys(hashmapS).length > 0 ? false : true;
};