/*

Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
0 ≤ a.length ≤ 105,
-2 · 109 ≤ a[i] ≤ 2 · 109.

[output] boolean

*/

// Solution

function containsDuplicates(a) {

    let mySet = new Set; // creat set 
    
    for(let i = 0, x = a.length; i < x; i++) { // loop through
    
        // if it exist return true b/c is duplicate
        // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
        if(mySet.hasOwnProperty(a[i])) { 
            return true;
        }
        mySet[a[i]] = true; // add to set (true)
    }
    return false; // return false otherwise

}
