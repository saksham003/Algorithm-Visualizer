const sortingCompletedAnimation = (array, coloringFunc) => {
  array.forEach((element, idx) => {
    setTimeout(() => {  
        coloringFunc((prev) => {
            return [...prev,idx]
        })
    }, 50 * idx);
  });
};

export default sortingCompletedAnimation;
