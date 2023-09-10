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
    if (typeof data !== "number") {
      return reject("error");
    }
    if (data > 5) {
      return reject("Number is greater than 5");
    }
    setTimeout(() => resolve(data), 1000);
  });
};


module.exports = {
  job,
  checkNumber
};
