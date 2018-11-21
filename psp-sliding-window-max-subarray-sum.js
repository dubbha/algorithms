/*
  Given an array of integers and a number, write a function called maxSubarraySum,
  which finds the maximum sum of a subarray with the length of the number passed to the function.

  Note that a subarray must consist of consecutive  elements from the original array.
  In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

  maxSubarraySum([100, 200, 300, 400], 2);                // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);      // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);               // 5
  maxSubarraySum([2, 3], 3);                              // null

  Time O(n), Space O(1)
*/

function maxSubarraySum(arr, size) {
  if (arr.length < size) return null;
  
  let p1 = 0;
  let p2 = size;
  let subsum = arr.slice(p1, p2).reduce((acc, cur) => acc + cur, 0);
  let max = subsum;

  while (p1 < arr.length - size) {
      subsum = subsum + arr[p2] - arr[p1];
      max = Math.max(max, subsum);
      p1++;
      p2++;
  }
  return max;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410590
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351748
*/