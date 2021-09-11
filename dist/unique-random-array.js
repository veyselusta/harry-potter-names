"use strict";

var uniqueRandom = require('./unique-random');

module.exports = function uniqueRandomArray(array) {
  var random = uniqueRandom(0, array.length - 1);
  return function () {
    return array[random()];
  };
};