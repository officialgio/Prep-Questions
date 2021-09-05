/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.

*/

// Solution

// itirate through str
// set first index of char 
// char is a data type that is used to store a single character.
// indexOf() method returns the first occurance/index at which a given element can be found in the array, or -1 if it is not present.


function firstNotRepeatingCharacter(s) {

  for (let i = 0; i < s.length; i++) { //loop through the str
    let char = s[i]; // set char to the first index
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";

}
