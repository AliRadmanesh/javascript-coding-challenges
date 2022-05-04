/*
  Task: Given a sorted array and a number x, find the pair in array whose sum is closest to x.
  Input:
    const input = [10, 22, 28, 29, 30, 40];
    const x = 54;
  Output:
    const output = [22, 30];
*/
const input = [10, 22, 28, 29, 30, 40];
const x = 54;

/*
  Solution 1: A simple solution is to consider every pair and keep track of the closest pair (the absolute difference between pair sum and x is minimum). The time complexity of this solution is O(n^2).
  Solution 2 (better): An efficient solution can find the pair in O(n) time. Since the array is sorted in advance, we can use a left & right pointers to the left and right side of the array and move them to the right & left so we can calculate the sum of the pairs.
*/
const findClosestPair = (input, x) => {
  let difference = Number.MAX_VALUE;
  let right = input.length - 1;
  let left = 0;
  let result = [];

  while (left < right) {
    const currentDifference = Math.abs(input[left] + input[right] - x);
    if (currentDifference < difference) {
      difference = currentDifference;
      result = [input[left], input[right]];
    }

    if (input[left] + input[right] < x) left++;
    else right--;
  }

  return result;
};

const output = findClosestPair(input, x);
console.log(output);
