// S20 Variables - Functions

const helloWorld = 'Hello World';

const helloFunction = function() {
};
const helloFunction2 = () => {
  return helloWorld;
};

function getCurrentTime() {
  return new Date();
}

const returnValue = getCurrentTime();


console.log(helloWorld);

// log the function
// console.log(helloFunction);
// console.log(helloFunction2);

// execute the function
// console.log(helloFunction());
// console.log(helloFunction2());

// console.log(returnValue);
