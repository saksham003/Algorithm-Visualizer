export function mergeSort(arr) {
    const animations = [];
    const auxiliaryArray = arr.slice();
    const array = arr.slice()
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([[i, j], false, null]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([[k, auxiliaryArray[i]], true, null]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([[k, auxiliaryArray[j]], true, null]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([[i, i], false, null]);
      animations.push([[k, auxiliaryArray[i]], true, null]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([[j, j], false, null]);
      animations.push([[k, auxiliaryArray[j]], true, null]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }