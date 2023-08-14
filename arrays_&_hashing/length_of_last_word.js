// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function (s) {

  let lastWordFound = false;
  let lastWordLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
          lastWordFound = true;
          lastWordLength++;
      }

      if (lastWordFound && s[i] === " ") {
          break;
      }
  }
  
  return lastWordLength
};