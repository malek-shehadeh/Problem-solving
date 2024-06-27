// Q1 : Given an array arr[] of size N, you have to reverse the array using Stack
function reverseArray(arr) {
  let stack = [];
  // Push all elements to the stack
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  // Pop all elements from the stack and put them back in the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
  return arr;
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]

// Q2 : Implementing a Queue Data Structure using Two Stacks
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.stack2.pop();
  }
}

// Example usage
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
queue.enqueue(4);
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4

// Q3 : Create a function to find the sum of an array of integers using recursion .
function recursiveSum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return arr[n - 1] + recursiveSum(arr, n - 1);
}

// Example usage
let arr2 = [1, 2, 3, 4, 5];
console.log(recursiveSum(arr2, arr2.length)); // Output: 15

// Q4 : Create a function that takes a LinkedList and reverses it
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head = reverseLinkedList(head);
while (head !== null) {
  console.log(head.value);
  head = head.next;
}
// Output: 3 2 1

// Q5 :  Create a function that takes a LinkedList and deletes the middle node in it and returns it
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteMiddleNode(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;

  return head;
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head = deleteMiddleNode(head);
while (head !== null) {
  console.log(head.value);
  head = head.next;
}
// Output: 1 2 4 5

// Extra:
// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression. Using Stack
// Example :
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced
function isBalanced(exp) {
  let stack = [];
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of exp) {
    if (char in pairs) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }
  return stack.length === 0;
}

// Example usage
let exp = "[()]{}{[()()]()}";
console.log(isBalanced(exp)); // Output: true
exp = "[(])";
console.log(isBalanced(exp)); // Output: false
