const httpErrorException = (message, status = 402) => {
  throw new CustomError({ errors: [{ message }] }, status);
};

module.exports = httpErrorException;
