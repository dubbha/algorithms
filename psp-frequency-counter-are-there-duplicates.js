/* 
  Implement a function called areThereDuplicates,  which accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  areThereDuplicates(1, 2, 3);              // false
  areThereDuplicates(1, 2, 2);              // true
  areThereDuplicates('a', 'b', 'c', 'a');   // true

  Complexities:
    Time:  O(n) or better O(n log(n))
    Space: O(n) or better O(1)
*/

// Frequency coutner solution
function areThereDuplicates(...args) {            // const arr = Array.from(arguments), [...arguments].reduce()
  const freqs = args.reduce((acc, cur) => {       // count all the frequencies first
    acc[cur] = (acc[cur] || 0) + 1;               // acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc;
  }, {});

  return Object.values(freqs).some(f => f > 1);   // check if at least one frequency is > 1
}

// Using an object with flag-like values
// Frequency counter variation with an early escape
// Looping over arguments, not converting it to a real array
function areThereDuplicates() {
  const uniqs = {};
  for (let i = 0; i < arguments.length; i++) {    // looping over arguments without for..of
    if (uniqs[arguments[i]]) return true;
    uniqs[arguments[i]] = 1;
  }
  return false;
}

// Using Set()
// Looping over arguments, not converting it to a real array
function areThereDuplicates() {
const uniqs = new Set();
  for (let arg of arguments) {                  // looping over arguments with for..of
    if (uniqs.has(arg)) return true;
    uniqs.add(arg);
  }
  return false;
}

// Using Set(), a smart one-liner
function areThereDuplicates3() {  // can't use arrow function - has no arguments
  return new Set(arguments).size !== arguments.length; 
}

// Using Set(), a smart one-liner using arrow function
const areThereDuplicates = (...args) =>  new Set(args).size !== args.length; 


/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410592
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351738
*/