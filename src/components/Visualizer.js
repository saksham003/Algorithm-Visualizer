import React, { Fragment, useState } from "react";
import { Bar, BarContainer } from "../style/styled";
import bubbleSort from "../algorithms/bubbleSort";
import swap from "../helpers/swap";
import generateArray from "../helpers/generate-array";
import sortingCompletedAnimation from "../helpers/animations";

// Color Variables
const NORMAL_COLOR = "#1DA1F2";
const COMPARING_COLOR = "#FFFC00";
const SORTED_COLOR = "#25D366";

// Variables
const LENGTH_OF_ARRAY = 30;
const TIMEOUT_DELAY = 1000;

const Visualizer = () => {
  const initialState = generateArray(LENGTH_OF_ARRAY);
  const [array, setArray] = useState(initialState);
  const [comparasions, setComparisions] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortedArr, setSortedArr] = useState([]);

  const onClickHandler = () => {
    if (isSorting) {
      return
    }
    setArray(generateArray(LENGTH_OF_ARRAY));
    setSortedArr([])
  };

  const bubbleSortClickHandler = () => {
    if (isSorting) {
      return;
    }
    setIsSorting(true);
    const animations = bubbleSort(array);
    animations.forEach(([comparision, swapped, isSorted], idx) => {
      setTimeout(() => {
        if (isSorted !== null) {
          setSortedArr((prev) => {
            return [...prev, isSorted]
          });
        }
        if (swapped === true) {
          let [i, j] = comparision;
          setComparisions([i, j]);
          swap(array, i, j);
          setArray(array);
        } else if (swapped === false) {
          let [i, j] = comparision;
          setComparisions([i, j]);
        }
      }, TIMEOUT_DELAY * idx);
    });

    setTimeout(() => {
      console.log(sortedArr)
      setComparisions([]);
      setIsSorting(false);
      sortingCompletedAnimation(array,setSortedArr)
    }, TIMEOUT_DELAY * animations.length);
  };

  return (
    <Fragment>
      <BarContainer>
        {array &&
          array.map((value, idx) => {
            return (
              <Bar
                height={value}
                key={idx}
                color={
                  comparasions.includes(idx)
                    ? COMPARING_COLOR
                    : sortedArr.includes(idx)
                    ? SORTED_COLOR
                    : NORMAL_COLOR
                }
              />
            );
          })}
      </BarContainer>
      <button onClick={onClickHandler}>Show Bars</button>
      <button onClick={bubbleSortClickHandler}>Bubble Sort</button>
    </Fragment>
  );
};

export default Visualizer;
