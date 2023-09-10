// Task 5

// Solution 1
const compact = (arr) => arr.filter(Boolean);

// Test the function
console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // Output: [1, 2, 3, 'a', 's', 34]
console.log(compact([false, NaN, 'e' * 23])); // Output: []


// Solution 2
const compact2 = (arr) => arr.filter(item => !!item);

console.log(compact2([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // Output: [1, 2, 3, 'a', 's', 34]
console.log(compact2([false, NaN, 'e' * 23])); // Output: []
