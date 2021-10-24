
export function selectionSort(arr)
{
    var array = arr.slice()
    const animations = []
    var n = array.length
    var i, j, min_idx;
 
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++){
            if (array[j] < array[min_idx])
            min_idx = j;
            animations.push([[j,min_idx], false, null])
        }
        animations.push([[i,min_idx], true, i])
        swap(array,min_idx, i);
    }
    return animations
}

function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

