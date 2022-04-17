/*
  Task: Restructure tha array in a way that numbers come first and alphabets second.
  Input:
    const input = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
  Output:
    const output = [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];
*/

const input = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

/*
  Solution 1: Using for loop along with "typeof" operator
*/
const restructureArray1 = (arr) => {
  let numbersArr = [];
  let charArr = [];

  for (const item of arr) {
    if (typeof item === "number") {
      numbersArr.push(item);
    } else {
      charArr.push(item);
    }
  }

  const restructuredArr = [...numbersArr, ...charArr];
  return restructuredArr;
};

const output1 = restructureArray1(input);
console.log(output1);

/*
  Solution 2 (Better): Using "filter()" method along with "typeof" operator
  The "typeof" operator returns a string indicating the type of the unevaluated operand.
  ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/
const restructureArray2 = (arr) => {
  let numbersArr = [];
  let charArr = [];

  numbersArr = arr.filter((item) => typeof item === "number");
  charArr = arr.filter((item) => typeof item === "string");

  const restructuredArr = [...numbersArr, ...charArr];
  return restructuredArr;
};

const output2 = restructureArray2(input);
console.log(output2);
