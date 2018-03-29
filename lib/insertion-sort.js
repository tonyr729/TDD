const insertionSort = (array) => {

  for(i = 0; i < array.length; i++){
    let targetIndex = i + 1;
    let endOfSortedIndex = i;
    if( array[targetIndex] < array[endOfSortedIndex] ){
      [array[targetIndex], array[endOfSortedIndex]] = [array[endOfSortedIndex], array[targetIndex]];
      targetIndex--
      insertionSort(array);
    }
  }
  return array
}

module.exports = insertionSort;