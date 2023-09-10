// Task 6 - Modules

// Import createUser as userCreator
import userCreator from './export.js';

// Import printName and printAge as printFirstName and printDOB
import { printName as printFirstName, printAge as printDOB } from './export.js';

// Call the imported functions
userCreator();
printFirstName();
printDOB();
