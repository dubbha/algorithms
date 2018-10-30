/*
  Write a function called isSubsstring which takes in two strings and checks whether the characters
  in the first string form a subsequence of the characters in the second string.
  In other words, the function should check whether the characters in the first string appear
  somewhere in the second string, without their order changing.
  Time O(n + m), Space O(1)

  isSubsequence('hello', 'hello world');        // true
  isSubsequence('sing', 'string');              // true
  isSubsequence('abc', 'abracadabra');          // true
  isSubsequence('abc', 'acb');                  // false (order matters)

*/

function isSubsequence(substr, str) {
  if (!substr.length || substr.length > str.length) return false;

  let p1 = 0;         // first index
  let p2 = 0;         // last index
  
  while (p2 < str.length) {
    if (substr[p1] === str[p2]) {
      if (p1 === substr.length - 1) return true;
      p1++;
    }
    p2++;
  }
  return false;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410596
*/