import React, { Fragment, useEffect, useState } from "react";
import { Bar } from "../style/styled";
import Controller from "./Controller";
// helpers
import { algoMapping } from "../helpers/algoSelector";
import getWidth from "../helpers/getWidth";
import swap from "../helpers/swap";
import colorPicker from "../helpers/colorPicker";
import generateArray from "../helpers/generate-array";
import sortingCompletedAnimation from "../helpers/animations";

const Visualizer = () => {
  const [arrayLength, setArrayLength] = useState(20);
  const initialState = generateArray(arrayLength);
  const [algorithm, setAlgorithm] = useState("Bubble Sort")
  const [speed, setSpeed] = useState(100);
  const [array, setArray] = useState(initialState);

  const [comparasions, setComparisions] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortedArr, setSortedArr] = useState([]);

  useEffect(() => {
    setSortedArr([])
    setArray(generateArray(arrayLength));
  }, [arrayLength]);

  const onRandomizeClickHandler = () => {
    if (isSorting) {
      return;
    }
    setArray(generateArray(arrayLength));
    setSortedArr([]);
  };

  const onStartClick = () => {
    if (isSorting) {
      return;
    }
    setIsSorting(true);
    const animations = algoMapping[algorithm](array);
    animations.forEach(([comparision, swapped, isSorted], idx) => {
      setTimeout(() => {
        if (isSorted !== null) {
          setSortedArr((prev) => {
            return [...prev, isSorted];
          });
        }
        if (swapped === true) {
          let [i, j] = comparision;
          setComparisions([]);
          setSwapping([i, j]);
          swap(array, i, j);
          setArray(array);
        } else if (swapped === false) {
          let [i, j] = comparision;
          setSwapping([]);
          setComparisions([i, j]);
        }
      }, speed * idx);
    });

    setTimeout(() => {
      setComparisions([]);
      setSwapping([]);
      setIsSorting(false);
      sortingCompletedAnimation(array, setSortedArr);
    }, speed * animations.length);
  };

  return (
    <Fragment>
      <div className="w-full flex flex-row justify-center h-[420px]">
        {array &&
          array.map((value, idx) => {
            return (
              <Bar
                height={value}
                key={idx}
                color={colorPicker(idx, comparasions, swapping, sortedArr)}
                width={getWidth(arrayLength)}
              />
            );
          })}
      </div>

      <Controller
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        onRandomizeClickHandler={onRandomizeClickHandler}
        setSpeed={setSpeed}
        setAlgorithm={setAlgorithm}
        isSorting={isSorting}
        onStartClick={onStartClick}
      />

      
    </Fragment>
  );
};

export default Visualizer;
