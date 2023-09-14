/**
 * Aufgabe -->
 *
 * schleife mit einem interval von 2 Sek.  indem ein counter ausgeloggt wird
 * --> jede Sek. wird counter inkrementiert um 1
 *
 * if counter === 10 --> resolve counter
 * if counter > 10 --> reject err
 */

const myFunction = () => {
  let counter = 0;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      // interval block
      console.log('my counter = ', ++counter);

      if (counter > 10) {
        clearInterval(interval);
        reject(10);
      }

    }, 1000);
  });

};

const myFunction2 = () => {
  let counter = 0;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      // interval block
      console.log('my counter = ', ++counter);

      if (counter > 10) {
        clearInterval(interval);
        reject(10);
      }

    }, 1000);
  });

};

myFunction()
  .then((res) => console.log('my result = ', res))
  .then(() => this.myFunction())
  .catch((err) => console.error('err = ', err));

const testPromise = () => {
  return Promise.all([myFunction(), myFunction()]); // Fork Join
};

const fetchData = async (number, age, firstName) => {

  try {
    const response = await fetch('http://localhost:4730/books');
    const response2 = await fetch('http://localhost:4730/cars');
    const result = await response.json();
    const result2 = await response2.json();
    console.log('res --> ');
    // do something with result
    return 2;
  } catch (e) {
    console.error('Error --> ', e);
  }
};
