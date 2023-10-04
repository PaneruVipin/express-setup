const unprocessableException = require("../exceptions/unprocessableException");
const Env = require("../lib/env");

appRouter.get("/test1", async function () {
  respond("respond with a resource");
});

appRouter.get("/test2", async function () {
  unprocessableException("an error occured", 401);
});

appRouter.get("/test3", async function () {
  respond("Env testing: " + Env.APP_NAME);
});
