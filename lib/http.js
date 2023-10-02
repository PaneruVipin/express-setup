const httpErrorException = require("../exceptions/httpErrorException");
const { findValue } = require("./object");

const httpResponse = (fn, whereData = ["data"], whereError = ["message"]) => {
  const res = new Promise((resolve) => {
    fn.then((r) => {
      resolve(findValue(r, whereData));
    }).catch((e) => {
      resolve({ error: findValue(e, whereError) });
    });
  });
  return res;
};

const httpResponseOrFail = (
  fn,
  whereData = ["data"],
  whereError = ["message"]
) => {
  const res = new Promise((resolve, reject) => {
    fn.then((r) => {
      resolve(findValue(r, whereData));
    }).catch((e) => {
      reject(httpErrorException(findValue(e, whereError)));
    });
  });
  return res;
};
module.exports = { httpResponse, httpResponseOrFail };
