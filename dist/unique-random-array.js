"use strict";

var _uniqueRandom = _interopRequireDefault(require("./unique-random"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function uniqueRandomArray(array) {
  var random = (0, _uniqueRandom.default)(0, array.length - 1);
  return function () {
    return array[random()];
  };
};