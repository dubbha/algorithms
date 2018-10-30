/*
  Write a function called isSubstring which takes in two strings and checks whether
  the first string is a substring of the second string.
  Time O(n), Space O(1)

  isSubstring('hello', 'hello world');      // true
  isSubstring('llo', 'hello world');        // true
  isSubstring('hello', 'hellhello world');  // true
  isSubstring('earth', 'hello world');      // false
*/

function isSubsequence(substr, str) {
  if (!substr.length || substr.length > str.length) return false;

  let p1 = 0;         // first index
  let p2 = 0;         // last index
  
  while (p2 < str.length) {
    if (substr[p1] === str[p2]) {
      if (p1 === substr.length - 1) return true;
      p1++;
      p2++;
    } else if (p1 > 0) {
      p1 = 0;   // reset a partially successful search without advancing p2
    } else {
      p2++;
    }
  }
  return false;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410596
*/