/*
  Task: Rotate the string K times in the left direction
  Input:
    const input = "javascript"
    const k = 2
  Output:
    const output = "vascriptja"
*/

const input = "javascript";
const k = 2;

/*
  Solution: Using substring() method & ES6 "template literals"
  The "substring()" method returns the part of the string between the start and end indexes, or to the end of the string.
  Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.
  ref1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
  ref2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
const rotateString = (str, n) => {
  const firstPart = str.substring(0, n); // from 0th char to nth
  const secondPart = str.substring(n); // from nth char to the end
  return `${secondPart}${firstPart}`;
};

const output = rotateString(input, k);
console.log(output);
