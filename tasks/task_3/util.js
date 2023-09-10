// Task 3 - map()

// New function to transform an array of numbers into an array of objects
const transformToObjects = (numbersArray) => {
  return numbersArray.map((num) => ({ val: num }));
};

const list = [1, 2, 3];

console.log(transformToObjects(list)); // [ { val: 1 }, { val: 2 }, { val: 3 } ]
