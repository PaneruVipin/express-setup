const { router } = require("../lib/router");

router.get("/test", function (req, res, next) {
  res.send("respond with a resource");
});
