// Task 4 - Arrow Functions and reduce

const nums = [2, 4, 5];


const double = num => num * 2;
console.log(double(5)); // 10

const square = num => num ** 2;
console.log(square(5)); // 25

// reduce
const onlyReduce = arr => arr.reduce((a, num) => a + num, 0); // 2 + 4 + 5 = 11

console.log(onlyReduce(nums));

const doubleandSquareandSum = arr => arr.reduce((a, num) => a + ((2 * num) ** 2), 0);
console.log(doubleandSquareandSum(nums)); // Result: 180


// const doubleandSquareandSum2 = arr => arr.reduce((a, num) => a + (square(double(num))), 0);
// console.log(doubleandSquareandSum2(nums)); // Result: 180
