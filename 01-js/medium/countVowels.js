/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let count = 0;
    let word = str.toLowerCase().split('');

    for (let index = 0; index < word.length; index++) {
      
      if (
        word[index] === "a" ||
        word[index] === "e" ||
        word[index] === "i" ||
        word[index] === "o" ||
        word[index] === "u"
      ) {
        count++;
      }
      
    }

    return count;
}

module.exports = countVowels;