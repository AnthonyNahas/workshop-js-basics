//
const double = (value) => {
  return value * 2;
};

const transform = (number, func) => {
  return func(number);
};

// New function to transform an array of numbers into an array of objects
const transformToObjects = (numbersArray) => {
  return numbersArray.map((num) => ({ val: num }));
};

export const testFunction = () => {

};

// Export the functions so they can be used in other files
module.exports = {
  double,
  transform,
  transformToObjects
};
