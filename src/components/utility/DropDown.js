import React from "react";

const DropDown = ({ label, array, getSelected }) => {
  const onSelectChange = (event) => {
    event.preventDefault();
    let curr = event.target.options;
    getSelected(curr[curr.selectedIndex].value);
  };

  return (
    <div>
      <label className="mr-3" htmlFor="algorithms">
        {label}
      </label>
      <select
        className="p-2 border border-double bg-gray-100 
        focus:outline-none focus:ring-2 ring-gray-300 dark:ring-gray-500
        dark:bg-gray-600 dark:border-gray-500 transition-{background-color} duration-500"
        name={label}
        id={label}
        onChange={onSelectChange}
      >
        {array.map((value) => {
          return (
            <option className="p-2" key={value} value={`${value}`}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
