const unprocessableException = (message, status = 412) => {
  throw new CustomError({ errors: [{ message }] }, status);
};

module.exports = unprocessableException;
