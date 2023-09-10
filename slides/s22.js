// S22 Variables - Object types (Array)
// Call by reference

const a = [1, 2, 3];
const b = a;	// Copy the reference
a[0] = 99;  // Modify the array using the reference

console.log(b); // => [99, 2, 3]
