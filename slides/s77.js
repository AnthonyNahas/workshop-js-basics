// S71 Array (in)equality


const zero = 0;
const anyNumber = 3;
const anyNumberNegative = -3;

console.log('zero --> ', zero);
console.assert(zero);

console.log('anyNumber --> ', anyNumber);
console.assert(anyNumber);

console.log('anyNumberNegative --> ', anyNumberNegative);
console.assert(anyNumberNegative);

const emptyString = '';
const anyString = 'hi';

console.log('emptyString --> ', emptyString);
console.assert(emptyString);

console.log('anyString --> ', anyString);
console.assert(anyString);

const braces = {};
const list = [];

console.log('braces --> ', braces);
console.assert(braces);

console.log('list --> ', list);
console.assert(list);

const x = null;
const y = undefined;

console.log('x --> ', x);
console.assert(x);

console.log('y --> ', y);
console.assert(y);

