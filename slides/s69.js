// S69 Object (in)equality

const car = {
  brand: 'Ford'
};

const car2 = {
  brand: 'Ford'
};

const r1 = car == car2;
const r2 = car === car2;

console.log('r1 --> ', r1);
console.log('r2 --> ', r2);
