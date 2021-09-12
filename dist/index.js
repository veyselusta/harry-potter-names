'use strict';

var _uniqueRandomArray = _interopRequireDefault(require("./unique-random-array"));

var _harryPotterNames = _interopRequireDefault(require("./harry-potter-names.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray.default)(_harryPotterNames.default);
module.exports = {
  all: _harryPotterNames.default,
  random: random,
  sameFirstLetter: sameFirstLetter
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    return Array(number).fill('').map(function () {
      return getRandomItem();
    });
  }
}

function sameFirstLetter(char) {
  return _harryPotterNames.default.filter(function (name) {
    return name == char;
  });
}