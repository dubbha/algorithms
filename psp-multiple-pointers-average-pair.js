/*
  Write a function called averagePair.
  Given a sorted array of integers and a target average, determine if there is a pair of values
  in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.
  Time O(n), Space O(1)
*/

function averagePair(ints, avg) {   // array of integers, target avarage
  if (!ints.length) return false;   // empty array edge case

  let p1 = 0;                       // firrt index
  let p2 = ints.length - 1;         // last index
  
  while (p1 < p2) {
    const curAvg = (ints[p2] - ints[p1]) / 2;
    console.log(curAvg);
    if (curAvg === avg) return true;
    if (curAvg > avg) {
      p2--;
    } else {
      p1++;
    }

  }
  return false;
}