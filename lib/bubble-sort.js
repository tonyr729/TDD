const bubbleSort = (array) => {
    for (let x = 0; x < array.length; x++) {
      for (let i = 0; i < (array.length - x); i++) {
        if ( array[i] > array[i + 1] ) {
          [array[i], array[i + 1]] = [array[i +1 ], array[i]];
        }
      }
    }
    return array;
  }

module.exports = bubbleSort;