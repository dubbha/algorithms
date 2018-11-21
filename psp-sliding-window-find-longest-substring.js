/*
  Write a function called findLongestSubstring, which accepts a string
  and returns the length of the longest substring with all distinct characters.

  findLongestSubstring('');                     // 0
  findLongestSubstring('rithmschool');          // 7
  findLongestSubstring('thisisawesome');        // 6
  findLongestSubstring('thecatinthehat');       // 7
  findLongestSubstring('bbbbb');                // 1
  findLongestSubstring('longestsubstring');     // 8

  Time O(n)

*/

function findLongestSubstring(str){
  if (!str.length) return str.length;

  const uniqs = new Set(str);
  for (let winSize = uniqs.size; winSize > 1; winSize--) {
    let p1 = 0;
    let p2 = winSize;
    let sub = str.substring(p1, p2);

    while (p2 < str.length + 1) {
      if (sub.length === new Set(sub).size) return sub.length;
      p1++;
      p2++;
      sub = str.substring(p1, p2);
    }
  }

  return 1;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410594
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351748
*/
