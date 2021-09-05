/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 105,
-1000 ≤ element value ≤ 1000.

[input] integer k

An integer.

Guaranteed constraints:
-1000 ≤ k ≤ 1000.

[output] linkedlist.integer

Return l with all the values equal to k removed.

*/

// Solution

function removeKFromList(l, k) {
  // initialize out variable to our placeholder
  let node = new ListNode(); //ListNode() == Linked List
  // direct the node to the beginning of our list l
  node.next = l;
  let currentNode = node; // current index to node
  
  /*
   * While there exists a next value for our current node
   * as long as we are not at the end of the linked list
   */
  while(currentNode.next) {
    // evaluate if the node value equals k
    // the value we are hoping to remove
    if (currentNode.next.value === k) {
      // we will skip over that k value and will remove from our
      // list by hoping over k
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
    
  }
  return node.next;
}
