const { job, checkNumber } = require('./job');

// Testing "test", 1, and 2
checkNumber('test')
  .then(console.log)
  .catch(console.error);

checkNumber(1)
  .then(console.log)
  .catch(console.error);

checkNumber(2)
  .then(console.log)
  .catch(console.error);


job()
  .then((result) => {
    console.log('Job returned: ', result);
    return checkNumber(result);
  })
  .then((result) => {
    console.log('Check number returned: ', result);
  })
  .catch((error) => {
    console.log('Caught error: ', error);
  });
