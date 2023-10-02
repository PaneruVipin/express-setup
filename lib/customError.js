class CustomError extends Error {
  constructor(errors, status = 400) {
    super();
    this.status = status;
    this.errors = errors;
  }
}
module.exports = { CustomError };
