'use strict'

const expect = require('chai').expect
const harryPotterNames = require('.')

describe('harry-potter-names', function () {
  it ('should have a list of all available names', function () {
    expect(isArrayOfString(harryPotterNames.all)).to.be.true
  })

  it('should allow me to get a random name from the list', function () {
    expect(isIncludedIn(harryPotterNames.random())(harryPotterNames.all)).to.be.true
  })

})

function isArrayOfString (array) {
  return array.every(function (item) {
    return typeof item === 'string'
  })
}

function isIncludedIn (array) {
  return function (item) {
    return array.indexOf(item) !== 1
  }
}