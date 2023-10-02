function findValue(obj, keys) {
  let result = obj;
  for (let key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  return result;
}
module.exports = { findValue };
