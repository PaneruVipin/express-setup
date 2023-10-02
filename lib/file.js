const fs = require("fs");
const path = require("path");
function listFiles(directoryPath, currentFileName) {
  const results = [];
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    items.forEach((item) => {
      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);
      if (stats.isFile()) {
        if (itemPath !== path.join(directoryPath, currentFileName)) {
          results.push(itemPath);
        }
      } else if (stats.isDirectory()) {
        traverse(itemPath);
      }
    });
  }
  traverse(directoryPath);
  return results;
}

module.exports = { listFiles };