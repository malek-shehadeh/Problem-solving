function reverseArrayUsingStack(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

reverseArrayUsingStack(arr);
console.log("Reversed array:", arr);
