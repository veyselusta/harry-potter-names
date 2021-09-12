'use strict' 

import uniqueRandomArray from './unique-random-array'; 
import harryPotterNames from './harry-potter-names.json';

const getRandomItem = uniqueRandomArray(harryPotterNames)

module.exports = {
  all: harryPotterNames,
  random,
  sameFirstLetter
};

function random (number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    return Array(number).fill('').map(() => getRandomItem())
  }
}

function sameFirstLetter (char) {
  return harryPotterNames.filter(name => name.toLowerCase() == char.toLowerCase())
}
