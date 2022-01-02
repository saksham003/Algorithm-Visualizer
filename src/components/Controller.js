import React, { useEffect, useState } from "react";
import DropDown from "./utility/DropDown";
import Slider from "./utility/Slider";
import { speeds, speedSetter } from "../helpers/speedSetter";
import { algoMapping } from "../helpers/algoSelector";
import Info from "./Info";

const Controller = ({
  arrayLength,
  setArrayLength,
  setSpeed,
  setAlgorithm,
  onRandomizeClickHandler,
  isSorting,
  onStartClick,
}) => {
  const [selectedSpeed, setSelectedSpeed] = useState("1x");
  const [selectedAlgo, setSelectedAlgo] = useState("Bubble Sort");

  useEffect(() => {
    setAlgorithm(selectedAlgo);
  }, [selectedAlgo, setAlgorithm]);

  useEffect(() => {
    setSpeed(speedSetter[selectedSpeed]);
  }, [selectedSpeed, setSpeed]);

  const onRangeChange = (event) => {
    event.preventDefault();
    setArrayLength(event.target.value);
  };

  return (
    <React.Fragment>
      <div
        className="w-screen py-3 px-16 flex justify-evenly items-center bg-gray-50 
    dark:bg-gray-700 dark:text-gray-100 transition-{background-color} duration-500 "
      >
        <button
          className=" text-gray-500 hover:text-gray-400 text-xl dark:text-gray-300"
          onClick={onRandomizeClickHandler}
          title="Randomize"
          disabled={isSorting}
        >
          <i className="fas fa-random"></i>
        </button>

        <DropDown
          label={"Select Algorithm:"}
          array={Object.keys(algoMapping)}
          getSelected={setSelectedAlgo}
        />
        <Slider
          label={"Array Size:"}
          value={arrayLength}
          onRangeChange={onRangeChange}
          min={"10"}
          max={"100"}
          isDisabled={isSorting}
        />
        <DropDown
          label={"Speed"}
          array={speeds}
          getSelected={setSelectedSpeed}
        />
        <button
          className="py-2 px-8 bg-gray-200 dark:bg-gray-500 dark:text-gray-100
          transition-{background-color} duration-500"
          onClick={onStartClick}
        >
          Start
        </button>
      </div>
      <Info/>
    </React.Fragment>
  );
};

export default Controller;
