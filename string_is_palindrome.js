/*
  Task: Check if the given string is palindrome
  Input:
    const firstString = "madam"
    const secondString = "dog"
  Output:
    firstString => true (is palindrome)
    secondString => false (is NOT palindrome)
*/

const firstString = "Madam";
const secondString = "dog";

/*
  Solution: Divide string into array of chars, reverse the array, and concatenate chars array into a string!
  The "split()" method divides a string into an ordered list of substrings, puts these substrings into an array...
  The "reverse()" method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
  The "join" method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
  ref1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  ref2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  ref3: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
const splittedFirstString = firstString.split("");
const reversedFirstStringArray = splittedFirstString.reverse();
const reversedFirstString = reversedFirstStringArray.join("");
console.log(reversedFirstString.toLowerCase() === firstString.toLowerCase());

const splittedSecondString = secondString.split("");
const reversedSecondStringArray = splittedSecondString.reverse();
const reversedSecondString = reversedSecondStringArray.join("");
console.log(reversedSecondString.toLowerCase() === secondString.toLowerCase());
