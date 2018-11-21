/*
  Write a function called minSubArrayLen  which accepts two parameters -
  an array of positive integers and a positive integer.

  This function should return the minimal length of a contiguous subarray
  of which the sum is greater than or equal to the integer passed to the function.
  If there isn't one, return 0 instead.

  minSubArrayLen([2, 3, 1, 2, 4, 3], 7);                          // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9);                             // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);     // 1 -> because 62 > 52
  minSubArrayLen([1, 4, 16, 22,  5, 7, 8, 9, 10], 39);            // 3
  minSubArrayLen([1, 4, 16, 22,  5, 7, 8, 9, 10], 55);            // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);                      // 2
  minSubArrayLen([1, 4, 16, 22,  5, 7, 8, 9, 10], 95);            // 0

  Time O(n), Space O(1)

*/

function minSubArrayLen(arr, sum) {
  if (!arr.length) return 0;

  for (let i = 0; i < arr.length; i++) {
      let p1 = 0;
      let p2 = 1 + i;

      let curSum = arr.slice(p1, p2).reduce((acc, cur) => acc + cur, 0);
      while(p2 <= arr.length) {
          if (curSum >= sum) {
              return p2 - p1;
          }
          curSum = curSum - arr[p1] + arr[p2];
          p2++;
          p1++;
      }
  }

  return 0;
}


/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410608
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351748
*/
