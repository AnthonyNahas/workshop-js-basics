// S32 Destructuring - Arrays
// Get specific local variables from an object with destructuring.

const coords = [51, 6];


// Extract second argument only
const [, lng] = coords;

console.log(lng); // => 6
