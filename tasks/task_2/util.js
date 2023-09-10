// Task 2 - Executing Functions Directly & Indirectly

// Function to double the input value
function double(value) {
  return value * 2;
}

// Function to transform a number using another function
function transform(number, func) {
  return func(number);
}

console.log(transform(10, double)); // 20

// what happens if we execute double as param
// console.log(transform(10, double())); // TypeError: func is not a function
