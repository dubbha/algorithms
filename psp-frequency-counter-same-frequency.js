/*
  Write a function called sameFrequency.
  Given two positive integers, find out if the two numbers have the same frequency of digits.

  Your solution MUST have the following time complexity: O(n)

  sameFrequency(182, 281);            // true
  sameFrequency(34, 14);              // false
  sameFrequency(3589578, 5879385);    // true
  sameFrequency(22, 222);             // true
*/

function sameFrequency(num1, num2) {
  const digits1 = `${num1}`.split('');      // number > string > array
  const digits2 = `${num2}`.split('');

  if (digits1.length !== digits2.length) return false;

  const freq1 = digits1.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? ++acc[cur] : 1;         // acc[cur] = (acc[cur] || 0) + 1;
      return acc;
  }, {});

  for (let i = 0; i < digits2.length; i++) {
    const cur = digits2[i];

    if (!freq1[cur]) return false;    // if freq1[cur] reached zero, this will return false

    freq1[cur]--;     // decrease freq[cur], (freq[cur] -= 1, freq[cur] = freq[cur] - 1)
  }

  return true;
}

// Less smart solution, count both frequency arrays first, then compare.
// Not converting a srting to array this time, looping over a string itself.
function sameFrequency(num1, num2) {
  const digits1 = num1.toString();      // `${num1}`
  const digits2 = num2.toString();

  if (digits1.length !== digits2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < digits1.length; i++) {
    freq1[digits1[i]] = (freq1[digits1[i]] || 0) + 1;
  }

  for (let i = 0; i < digits2.length; i++) {
    freq2[digits2[i]] = (freq2[digits2[i]] || 0) + 1;
  }

  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410598
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351738
*/

