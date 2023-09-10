const job = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 11);
      resolve(randomNumber);
    }, 2000);
  });
};

const checkNumber = (data) => {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'number') {
      return reject('error');
    }
    if (data % 2 === 1) {
      setTimeout(() => resolve('odd'), 1000);
    } else {
      setTimeout(() => reject('even'), 2000);
    }
  });
};


module.exports = {
  job,
  checkNumber
};
