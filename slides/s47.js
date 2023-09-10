// S46 Arrays - Iterators

const names = ['Hanni', 'Nanni'];

for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
}

for (let name of names) {
  // console.log(name);
}


names.forEach(name => console.log(name)); // one single loc
