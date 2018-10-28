/* 
 Implement a function called countUniqueValues, which accepts a sorted array,
 and counts the unique values in the array.
 There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr){
  if (arr.length === 0) return 0;

  let i = 0;

  for(let j = 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      arr[++i] = arr[j];  // move i up, replace number at i with the one from j
    }
  }

  return i + 1;
}
  
// countUniqueValues([])                      // 0
// countUniqueValues([2])                     // 1
// countUniqueValues([1,1,2,3,2,3,3,1])       // 3
countUniqueValues([-2,-1,-1,0,3])             // 4

/*
    https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410612
*/