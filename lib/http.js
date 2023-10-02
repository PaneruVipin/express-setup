const httpResponseException = require("../exceptions/httpResponseException");

const httpResponse = (fn) => {
  const res = new Promise((resolve) => {
    fn.then((r) => {
      resolve(r.data);
    }).catch((e) => {
      resolve(e.message);
    });
  });
  return res;
};

const httpResponseOrFail = (fn) => {
  const res = new Promise((resolve, reject) => {
    fn.then((r) => {
      resolve(r.data);
    }).catch((e) => {
      reject(httpResponseException(e.message));
    });
  });
  return res;
};
module.exports = { httpResponse, httpResponseOrFail };

