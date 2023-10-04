const path = require("path");
const { listFiles } = require("../lib/file");
const currentDirectory = __dirname;
const currentFilename = path.basename(__filename);
const files = listFiles(currentDirectory, currentFilename);
files.forEach((item) => {
  require(item);
});

// dont edit index.js
// for define routes create new file or folder define routes
// for how to create routes see test.js