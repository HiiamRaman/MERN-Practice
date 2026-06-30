import React from "react";
import { useState } from "react";


function BgChanger() {
    const[darkTheme,setDarkTheme] = useState(false);
function handleTheme(){
    setDarkTheme(!darkTheme);
}
  return (
    <div className={`min-h-screen flex justify-center items-center text-center   ${darkTheme?"bg-gray-700 text-white":"bg-white"}`}>
      <button onClick={handleTheme} className="border-2 rounded-md">Click Me to change theme</button>
    </div>
  );
}

export default BgChanger;
