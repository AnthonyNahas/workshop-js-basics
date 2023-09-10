// S25 Spread Operator

const numbersObject = {
  one: 1,
  two: 2,
  three: 3
};

const extendedNumbersObject = { ...numbersObject, four: 4 };


console.log(extendedNumbersObject); // { one: 1, two: 2, three: 3, four: 4 }
