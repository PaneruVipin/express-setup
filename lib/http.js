const { findValue } = require("./object");

const httpResponse = (fn, whereError = ["message"], whereData = ["data"]) => {
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
  whereError = ["message"],
  whereData = ["data"]
) => {
  const res = new Promise((resolve, reject) => {
    fn.then((r) => {
      resolve(findValue(r, whereData));
    }).catch((e) => {
      reject(
        new Execption({ errors: [{ message: findValue(e, whereError) }] })
      );
    });
  });
  return res;
};
module.exports = { httpResponse, httpResponseOrFail };
