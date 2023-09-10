// S30 Destructuring - Objects
// Renaming keys

const circle = {radius: 10, x: 140, y: 70};

const {x: newX, y: newY} = circle;
// const newX = circle.x;
// const newY = circle.y;

console.log(newX, newY) // => 140, 70
