function bubbleSort(array) {
  let copyArray = array.slice();
  const animations = [];

  for (var i = 0; i < copyArray.length; i++) {
    let lastELement = copyArray.length - i - 1;
    for (var j = 0; j < lastELement; j++) {
      if (copyArray[j] > copyArray[j + 1]) {
        animations.push([
          [j, j + 1],
          true,
          j === lastELement - 1 ? lastELement : null,
        ]);
        var temp = copyArray[j];
        copyArray[j] = copyArray[j + 1];
        copyArray[j + 1] = temp;
      } else {
        animations.push([
          [j, j + 1],
          false,
          j === lastELement - 1 ? lastELement : null,
        ]);
      }
    }
  }
  return animations;
}

export default bubbleSort;
