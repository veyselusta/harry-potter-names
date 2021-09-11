'use strict';

var uniqueRandomArray = require('./unique-random-array');

var harryPotterNames = require('./harry-potter-names.json');

var getRandomItem = uniqueRandomArray(harryPotterNames);
module.exports = {
  all: harryPotterNames,
  random: random,
  sameFirstLetter: sameFirstLetter
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    return Array.from({
      length: 5
    }, function (v, i) {
      return i;
    }).map(function () {
      return getRandomItem();
    });
  }
}

function sameFirstLetter(char) {
  return harryPotterNames.map(function (name) {
    return name == char;
  });
}