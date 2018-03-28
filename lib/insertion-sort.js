const insertionSort = (array) => {
  const length = array.length - 1;
  const runThroughSortedArray = (targetElementIndex, endOfSortedIndex) => {
    if (array[targetElementIndex] >= array[endOfSortedIndex] || !array[endOfSortedIndex]) {
      return "";
    } else if (array[targetElementIndex] < array[endOfSortedIndex]){
      [array[targetElementIndex], array[endOfSortedIndex]] = [array[endOfSortedIndex], array[targetElementIndex]];
      targetElementIndex--;
      return runThroughSortedArray(targetElementIndex, targetElementIndex - 1);
    }
  } 
  for (let i = 0; i < length; i++) {
      let targetElementIndex = (i + 1);
      let endOfSortedIndex = i;
      runThroughSortedArray(targetElementIndex, endOfSortedIndex);
  }
  return array;
}

module.exports = insertionSort;