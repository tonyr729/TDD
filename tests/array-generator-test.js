var assert = require('chai').assert;
const arrayGenerator = require('../tests/array-generator.js');


describe('arrayGenerator', function() {

  it('should be a function', function () {
    assert.isFunction(arrayGenerator);
  });

  it('should generate an array', function() {
    let newArray = arrayGenerator(3);

    assert.typeOf(newArray, 'array');
  });

  it('should generate an array of a desired length ', function() {
    let desiredLength = 3;
    let newArray = arrayGenerator(desiredLength);

    assert.equal(newArray.length, 3);
  });

  it('should generate a array of intergers', function() {
    let newArray = arrayGenerator(4);

    assert.typeOf(newArray[0], 'number');
  });

  it('should generate a array of strings', function() {
    let newArray = arrayGenerator(4,'words');

    assert.typeOf(newArray[0], 'string');
  })

  it('should generat large arrays', function() {
    let newArray = arrayGenerator(1000);

    assert.equal(newArray.length, 1000);
  });
});