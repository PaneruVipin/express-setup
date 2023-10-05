import { CustomError } from "../lib/customError";
import { Response, response } from "../lib/response";
import { router } from "../lib/router";
declare  global{
   var appRouter:typeof router
   var respond:typeof response
   var Execption:typeof CustomError
   var CustomResponse:typeof Response
}