/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9


*/

<--Solution--> 


/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    
  // keep tack of your int and roman num.
  let map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }

    let total = 0; // initial 

   
    for (let i = 0; i < s.length; i++) { // loop
      let currentInt = map[s.charAt(i)]; // current index of the roman num
      let nextInt = map[s.charAt(i + 1)]; // next index of the roman num (to compare with the currentInt)

      if (nextInt) { // only if there is a next roman num execute the if else statement
        if (currentInt >= nextInt) { // if the current index is great than the next index add it to the total.
          total += currentInt;
        } else { // else subtract the next index from the current index and add it to your toal to keep track.
          total += (nextInt - currentInt);
          i++; // still loop through
        }
      } else {
        total += currentInt; // otherwise just add the current index to the total since there's no nextInt
      }
    }

    return total;
};
