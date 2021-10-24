const NORMAL_COLOR = "#03A9F4";
const COMPARING_COLOR = "#FFEE58";
const SWAPPING_COLOR = "#EC407A";
const SORTED_COLOR = "#7CB342";

const colorPicker = (idx, comparasions, swapping, sortedArr) => {
  if (comparasions.includes(idx)) {
    return COMPARING_COLOR;
  }
  if (swapping.includes(idx)) {
    return SWAPPING_COLOR;
  }
  if (sortedArr.includes(idx)) {
    return SORTED_COLOR;
  } else {
    return NORMAL_COLOR;
  }
};

export default colorPicker;
