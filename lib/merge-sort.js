const mergeSort = (array) => {
  
  if(array.length <= 1) {
    return array;
  }
  
  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);
  
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
  
const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  let i = 0;
  let j = 0;
  
  while( i < leftArray.length && j < rightArray.length ) {
    if (leftArray[i] > rightArray[j]) {
      sortedArray.push(rightArray[j]);
      j++
    } else {
    sortedArray.push(leftArray[i]);
    i++
    }
  }
  
  return [...sortedArray, ...leftArray.splice(i), ...rightArray.splice(j)];
}

module.exports = mergeSort;