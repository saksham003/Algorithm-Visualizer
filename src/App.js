import React, { useState } from "react";
import Visualizer from "./components/Visualizer";

function App() {
  const [isDark, setIsDark] = useState(false);

  const darkToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`${isDark && "dark"}`}>
      <div className={`flex flex-col h-screen bg-white  dark:bg-gray-800`}>
        <div
          className="flex flex-row w-screen text-xl py-5 px-8 bg-gray-100 text-gray-800 font-bold shadow-md
      dark:bg-gray-700 dark:text-gray-100"
        >
          <div className="mr-auto ">Sorting Algorithm Visualizer</div>
          <div onClick={darkToggle} className="ml-auto mr-3 cursor-pointer">
            {!isDark && <i className="fas fa-moon"></i>}
            {isDark && <i className="fas fa-sun"></i>}
          </div>
        </div>
        <Visualizer />
      </div>
    </div>
  );
}

export default App;
