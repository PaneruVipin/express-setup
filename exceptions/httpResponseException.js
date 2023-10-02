const { CustomError } = require("../lib/customError");

const httpResponseException = (message, status = 402) => {
  throw new CustomError({ errors: [{ message }] }, status);
};

module.exports = httpResponseException;
