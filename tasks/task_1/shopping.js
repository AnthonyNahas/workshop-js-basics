// Task 1 - Destructuring


// ####### 1 ##############

let item = ['Egg', 0.25, 12];

let name = item[0];
let price = item[1];
let quantity = item[2];

// Solution
// let [name, price, quantity] = item;

console.log(name);
console.log(price);
console.log(quantity);

// ####### 2 ##############

function mergeObjects(a, b) {
  // your implementation
  return { ...a, ...b }; // using spread operator
}

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  c: 3,
  d: 4
};

// console.log(mergeObjects(obj1, obj2));
