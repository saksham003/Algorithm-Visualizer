import React from "react";

const Slider = ({label, value, onRangeChange, min, max, isDisabled} ) => {
  return (
    <div>
      <label className="mr-3" htmlFor="arrayLengthSlider">
        {label} {value}
      </label>
      <input
        onChange={onRangeChange}
        type="range"
        min={min}
        max={max}
        value={value}
        id={label}
        className="w-60"
        disabled={isDisabled}
      />
    </div>
  );
};

export default Slider;
