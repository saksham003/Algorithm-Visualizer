const sortingCompletedAnimation = (array, coloringFunc) => {
  array.forEach((element, idx) => {
    setTimeout(() => {  
        coloringFunc((prev) => {
            return [...prev,idx]
        })
    }, 30 * idx);
  });
};

export default sortingCompletedAnimation;
