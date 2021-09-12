"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueRandom;

function uniqueRandom(minimum, maximum) {
  var previousValue;
  return function random() {
    var number = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    previousValue = number === previousValue && minimum !== maximum ? random() : number;
    return previousValue;
  };
}