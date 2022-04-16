/*
  Task: Extract all property values from an array of objects
  Input:
    let input = [
      { name: "John", age: 21, city: "New York" },
      { name: "Mike", age: 28, city: "Moscow" },
      { name: "Danny", age: 30, city: "London" },
      { name: "Lisa", age: 26, city: "Paris" },
      { name: "Sophie", age: 19, city: "Berlin" },
    ];
  Output:
    const output = ["John", "Mike", "Danny", "Lisa", "Sophie"];
*/

let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

/*
  Solution: Use ES6 "arrow function expressions" & "map()" method
  ref1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  ref2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
const extractValues = (arr, property) => arr.map((item) => item[property]);

const output = extractValues(input, "name");
console.log(output);
