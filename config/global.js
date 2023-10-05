const { CustomError } = require("../lib/customError");
const { response, Response } = require("../lib/response");
const { router } = require("../lib/router");
/**@type {import('express').Express} */
global.appRouter = router;
global.respond = response;
global.Execption = CustomError;
global.CustomResponse = Response;
