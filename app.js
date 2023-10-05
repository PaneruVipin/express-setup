require("express-async-errors");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./routes/index");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const corsOption = require("./config/cors");
const { body, views, staticPath } = require("./config/app");
var app = express();
// view engine setup

app.use(cors(corsOption));
app.set("views", path.join(__dirname, views.viewsDir));
app.set("view engine", views.viewEngine);
app.use(fileUpload(body.multipartConfig));
app.use(logger("dev"));
app.use(express.json(body.jsonConfig));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, staticPath)));
app.use("/", appRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if (err instanceof Execption) {
    return res.status(err.status || 400).json(err.errors);
  }
  if (err instanceof CustomResponse) {
    return res.status(err.status || 200).json(err.data);
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
