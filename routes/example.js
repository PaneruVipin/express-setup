const unprocessableException = require("../exceptions/unprocessableException");
const Env = require("../lib/env");

appRouter.get("/example1", async function () {
  respond("respond with a resource");
});

appRouter.get("/example2", async function () {
  unprocessableException("an error occured", 401);
});

appRouter.get("/example3", async function () {
  respond("Env testing: " + Env.APP_NAME);
});
