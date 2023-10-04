class Response {
  constructor(data, status = 200) {
    this.status = status;
    this.data = data;
  }
}

const response = (data, status = 200) => {
  throw new Response(data, status);
};

module.exports = { Response, response };
