import React from "react";
import ColorInfo from "./utility/ColorInfo";

const Info = () => {
  return (
    <div className="w-11/12 bg-gray-100 flex flex-col p-10 mt-4 shadow-md
    dark:bg-gray-700 dark:text-gray-50 transition duration-500">
      <div className="flex flex-row">
        <ColorInfo color="bg-pink-400" description="Swapping" />
        <ColorInfo color="bg-yellow-300" description="Comparing"/>
        <ColorInfo color="bg-green-500" description="Sorted"/>
      </div>
    </div>
  );
};

export default Info;
