const { CustomError } = require("../lib/customError");
const { response, Response } = require("../lib/response");
const { router } = require("../lib/router");

global.appRouter = router;
global.respond = response;
global.CustomError = CustomError;
global.CustomResponse = Response;
