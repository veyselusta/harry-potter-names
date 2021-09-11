'use strict' 

const uniqueRandomArray = require('./unique-random-array') 
const harryPotterNames = require('./harry-potter-names.json')

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
    return Array.from({length: 5}, (v, i) => i).map(() => getRandomItem())
  }
}

function sameFirstLetter (char) {
  return harryPotterNames.map(name => name == char)
}
