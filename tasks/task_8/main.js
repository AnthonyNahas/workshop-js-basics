// ! 1) Promise-based request function
// ! ------------------------------

const httpRequestWithPromise = (url) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url) {
        reject({ status: 400 });
      } else {
        resolve({ data: [], status: 200, url });
      }
    }, 1000);
  });

const makeRequestPromiseChain = (url) => {
  httpRequestWithPromise(url)
    .then((result) => {
      // handle resolved Promise
      console.log(result.status);
    })
    .catch((errorOrRejectedPromise) => {
      // handle error or rejected Promise
      console.error(errorOrRejectedPromise.status);
    });
};

// no url -> Promise gets rejected
makeRequestPromiseChain(); // should log 400

// ? 🐆 [Task]: Currently the rejected promise is handled inside the
// ?            second callback function of the `.then` call.
// ?
// ?            Your task: Change the `makeRequestPromiseChain` function above
// ?            such that the `catch` block handles the rejected Promise instead
// ?            of the second argument of the `.then` call.

// ! 2) async/await based request function
// ! ----------------------------------

// ? 🐆 [Task]: Complete the async/await function `makeRequestAsyncAwait`
// ?            which calls `httpRequestWithPromise` and `console.log`s
// ?            the status of the response as above.

const makeRequestAsyncAwait = async (url) => {
  try {
    const result = await httpRequestWithPromise(url);
    console.log(result.status);  // Should log 200 if URL exists
  } catch (error) {
    console.error(error.status);  // Should log 400 if no URL is passed
  }
};

// passed url causes resolved Promise
makeRequestAsyncAwait("http://localhost:3000"); // 200

// no passed url causes rejected Promise
makeRequestAsyncAwait(); // 400
