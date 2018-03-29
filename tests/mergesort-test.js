var assert = require('chai').assert;
const mergeSort = require('../lib/merge-sort.js');
const arrayGenerator = require('./array-generator.js');


describe('mergeSort', function() {

  it('should be a function', function () {
    assert.isFunction(mergeSort);
  });

  it('should return an array', function() {
    var array = [1, 2, 3];

    let newArray = mergeSort(array);

    assert.typeOf(newArray, 'array');
  });

  it('should return an array of the same length', function() {
    var array = [1, 2, 3];

    let newArray = mergeSort(array);

    assert.equal(newArray.length, 3);
  });

  it('should sort a array of numbers', function() {
    var array = [2, 1, 3];

    let newArray = mergeSort(array);

    assert.deepEqual(newArray, [1, 2, 3]);
  });

  it('should sort a array of letters', function() {
    var array = ['c', 'a', 'b'];

    let newArray = mergeSort(array);

    assert.deepEqual(newArray, ['a', 'b', 'c']);
  });
  
  it('should sort a array of words', function() {
    var array = ['cat', 'apple', 'bear', 'dog'];

    let newArray = mergeSort(array);

    assert.deepEqual(newArray, ['apple', 'bear', 'cat', 'dog']);
  });

  it('should sort a array of arrays numbers', function() {
    var array = [[4, 5, 6], [1, 2, 3]];

    let newArray = mergeSort(array);

    assert.deepEqual(newArray, [[1, 2, 3], [4, 5, 6]]);
  });

  it('should sort a array of arrays words', function() {
    var array = [['cat', 'bear'], ['bat', 'apple']];

    let newArray = mergeSort(array);

    assert.deepEqual(newArray, [['bat', 'apple'], ['cat', 'bear']]);
  });

  it('should sort a large array', function() {
    var array = arrayGenerator(1000);

    let newArray = mergeSort(array);

    assert.isAtLeast(newArray[4], newArray[3]);
  });
});