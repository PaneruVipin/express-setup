const { default: axios } = require("axios");
const unprocessableException = require("../exceptions/unprocessableException");
const Env = require("../lib/env");

/**No need to import appRouter.
 * appRouter is a global keyword used solely for
 * route definition and does not need to be exported as a module. */

appRouter.get("/example1", async function () {
  /**respond is a global keyword designed for sending responses.
   * It doesn't rely on any Express arguments,
   * making it convenient for sending responses from nested functions without dependencies on the parent function. */
  respond("respond with a resource");
});

appRouter.get("/example2", async function () {
  /**Exceptions are extremely useful for throwing errors
   * without relying on any Express arguments or parent dependencies. */
  unprocessableException("an error occured", 401);
});

appRouter.get("/example3", async function () {
  respond("Env testing: " + Env.APP_NAME);
});

appRouter.get("/example4", async function () {
  const data = await resolveHttp(axios.get("https://example.com"));
  respond(data);
});

appRouter.get("/example5", async function () {
  const data = await resolveHttpOrFail(axios.get("https://example.com/800"));
  respond(data);
});

appRouter.get("/example6", async function () {
  const data = await resolveHttp(axios.get("https://example.com/800"));
  respond(data);
});
