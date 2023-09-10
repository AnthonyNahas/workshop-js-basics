// S17 let is block scoped

let example = 1;


// block scope - start
if (true) {
  let example = 2;
  console.log('Inside:  ' + example);
}
// block scope - end

console.log('Outside: ' + example);
// => Inside:  2
// => Outside: 1
