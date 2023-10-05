const unprocessableException = (message, status = 412) => {
  throw new Execption({ errors: [{ message }] }, status);
};

module.exports = unprocessableException;
