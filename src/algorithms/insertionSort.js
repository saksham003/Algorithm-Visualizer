export function insertionSort(arr) {
    const array = arr.slice()
    const animations = []
    let N = array.length;
    let i, j;
 
    for (i = 1; i < N; i++) {
        j = i;
 
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([[j-1,j], true, null])
            // Swap array[j] and array[j-1]
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j -= 1;
        }
    }
    return animations
}