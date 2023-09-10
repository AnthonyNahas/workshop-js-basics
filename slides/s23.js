// S23 Variables - Object types
// Call by reference

const person = { firstName: 'John', lastName: 'Doe' };
const secondPerson = person;		// Copy the reference


secondPerson.firstName = 'Jane';	// Modify the object using the reference

console.log(secondPerson); // => { firstName: 'Jane', lastName: 'Doe' }

console.log(person); // => { firstName: 'Jane', lastName: 'Doe' }
