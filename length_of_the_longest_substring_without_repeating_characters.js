/*
  Task: Find the length of the longest substring without repeating characters
  Input:
    const input = "abbbcabcdefef"
  Output:
    const output = 6 (=== "abcdef")
*/

const input = "abbbcabcdefef";

/*
  Solution1: Using for loops & "Set" object
*/
const findLength1 = (str) => {
  let finalLength = 0;

  for (i = 0; i < str.length; i++) {
    let currentString = new Set();

    for (j = i; j < str.length; j++) {
      if (currentString.has(str[j])) {
        break;
      } else {
        currentString.add(str[j]);
      }
    }

    finalLength = Math.max(finalLength, currentString.size);
  }

  return finalLength;
};
const output1 = findLength1(input);
console.log(output1);

/*
  Solution2: Using for loop, Array indexOf() method, and Array splice() method
  The "splice()" method changes the contents of an array by removing or replacing existing elements and/or adding new elements in-place.
  ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
const findLength2 = (str) => {
  let currentString = [];
  let finalLength = 0;

  for (let i = 0; i < str.length; i++) {
    const currentCharIndex = currentString.indexOf(str[i]);

    if (currentCharIndex !== -1) {
      currentString.splice(0, currentCharIndex + 1);
    }

    currentString.push(str[i]);
    finalLength = Math.max(finalLength, currentString.length);
  }

  return finalLength;
};

const output2 = findLength2(input);
console.log(output2);
