const httpErrorException = (message, status = 402) => {
  throw new Execption({ errors: [{ message }] }, status);
};

module.exports = httpErrorException;
