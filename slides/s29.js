// S29 Destructuring - Objects
// Get multiple local variables from an object with destructuring.

const circle = {radius: 10, x: 140, y: 70};

const {x, y} = circle;
// const x = circle.x;
// const y = circle.y;

console.log(x, y) // => 140, 70
