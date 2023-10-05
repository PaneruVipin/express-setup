const path = require("path");
const { listFiles } = require("../lib/file");
const currentDirectory = __dirname;
const currentFilename = path.basename(__filename);
const files = listFiles(currentDirectory, currentFilename);
files.forEach((item) => {
  require(item);
});

/**Please refrain from editing the index.js file.
 * To define routes, create a new file or folder specifically for route definitions.
 * For guidance on creating routes and other examples, refer to the example.js file */
