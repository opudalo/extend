"use strict";

module.exports = extend;

function extend(obj) {
  var args = Array.prototype.slice.call(arguments, 1);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arg = _step.value;

      if (!arg) continue;
      for (var prop in arg) {
        if (typeof obj[prop] == "object") obj[prop] = extend(obj[prop], arg[prop]);else obj[prop] = arg[prop];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
}