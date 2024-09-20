function fibs(n) {
    let fibArray = [0, 1]; // Start with the first two Fibonacci numbers
    if (n <= 1) return [0]; // If n is 1 or less, return just [0]
  
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]); // Add the sum of the two previous numbers
    }
    
    return fibArray;
  }
  
  // Test the iterative function
  console.log(fibs(8)); // Should output [0, 1, 1, 2, 3, 5, 8, 13]

  function fibsRec(n) {
    if (n <= 0) return [0]; // Base case for n = 0
    if (n === 1) return [0, 1]; // Base case for n = 1
    
    const sequence = fibsRec(n - 1); // Recursive call with n - 1
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; // Sum of last two numbers
    return [...sequence, nextNumber]; // Append the next number to the sequence
  }
  
  // Test the recursive function
  console.log(fibsRec(8)); // Should output [0, 1, 1, 2, 3, 5, 8, 13]

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: arrays with 0 or 1 elements are already sorted
    }
  
    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half
  
    return merge(left, right); // Merge the two sorted halves
  }
  
  function merge(left, right) {
    let result = [], i = 0, j = 0;
  
    // Merge elements in sorted order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Concat the remaining elements if any
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Test the mergeSort function
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Should output [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([105, 79, 100, 110])); // Should output [79, 100, 105, 110]
  