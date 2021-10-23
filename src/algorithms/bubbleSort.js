function bubbleSort(array) {
  let auxiliaryArray = array.slice();
  const animations = [];
  for (var i = 0; i < auxiliaryArray.length; i++) {
    let lastELement = auxiliaryArray.length - i - 1
    for (var j = 0; j < lastELement; j++) {
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([[j, j + 1], true, j === lastELement - 1 ? lastELement : null]);
        var temp = auxiliaryArray[j];
        auxiliaryArray[j] = auxiliaryArray[j + 1];
        auxiliaryArray[j + 1] = temp;
      } else {
        animations.push([[j, j + 1], false, j === lastELement - 1 ? lastELement : null]);
      }
    }
  }
  return animations;
}

export default bubbleSort;
