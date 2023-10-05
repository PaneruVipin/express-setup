import { CustomError } from "../lib/customError";
import { httpResponse, httpResponseOrFail } from "../lib/http";
import { Response, response } from "../lib/response";
import { router } from "../lib/router";
declare  global{
   var appRouter:typeof router
   var respond:typeof response
   var Execption:typeof CustomError
   var CustomResponse:typeof Response
   var resolveHttp:typeof httpResponse
   var resolveHttpOrFail:typeof httpResponseOrFail
}