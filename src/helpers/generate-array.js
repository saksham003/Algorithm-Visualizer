const MIN_ARRAY_NUM = 10;
const MAX_ARRAY_NUM = 400;

function generateNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  export default function generateArray(range) {
    const arr = [];
    for (let i = 0; i < range; i++) {
      arr.push(generateNum(MIN_ARRAY_NUM, MAX_ARRAY_NUM ));
    }
    return arr;
  }

