/*
  Task: Find the factorial of a given number
  Input:
    const input = 5
  Output:
    const output = 120
*/

const input = 5;

/*
  Solution 1: Using while loop
*/
let counter = input;
let output1 = 1;
while (counter > 1) {
  output1 *= counter;
  counter--;
}
console.log(output1);

/*
  Solution 2: Using recursion
  ref: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
*/
function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}
const output2 = factorial(input);
console.log(output2);
