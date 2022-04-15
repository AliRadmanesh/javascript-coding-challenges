/*
  Task: Remove all duplicate items from the given array
  Input: const inputArray = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
  Output: const outputArray = [1, 2, 3, 4, 5]
*/

const inputArray = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];

/*
  Solution 1: Using "Set"
  The "Set" object lets you store unique values of any type, whether primitive values or object references.
  ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
const outputArray1 = [...new Set(inputArray)];
console.log(outputArray1);

/*
  Solution 2: Using "filter()" and "indexOf()" method
  The "filter()" method creates a new array with all elements that pass the test implemented by the provided function.
  The "indexOf()" method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  ref1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  ref2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  - Description: The function in the filter method only returns true once and that's the first occurence of each unique number!
*/
const outputArray2 = inputArray.filter(
  (item, index) => inputArray.indexOf(item) === index
);
console.log(outputArray2);
