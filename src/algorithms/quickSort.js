const animations = [];
export function quickSort(array) {
  const arr = array.slice();
  var start = 0;
  var end = arr.length - 1;
  quickSortHelper(arr, start, end);
  return animations;
}

function quickSortHelper(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);

  quickSortHelper(arr, start, index - 1);
  quickSortHelper(arr, index + 1, end);
}
function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      animations.push([[i, pivotIndex], true, null]);
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  animations.push([[pivotIndex, end], true, null]);
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}
