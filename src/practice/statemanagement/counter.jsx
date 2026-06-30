import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  function handler() {
    setValue(value + 1);
  }
  function subhandler() {
    setValue(value - 1);
  }

  function reset(){
    setValue(0);
  }
  return (
   <div className="flex flex-col justify-center text-center  items-center">

      <div>
          <div  className=" bg-red-200 border-2 text-2xl p-3 m-4 rounded-md  cursor-pointer shadow-2xl  transition-full duration-300 hover:shadow-green-400/50  hover:translate-y-2">
        <h1>the value is {value}</h1>
      </div>
      </div>
         
     <div className="flex items-center justify-center text-center mt-10 gap-3">
      <button
        className="    p-2 bg-blue-300 border-2 rounded-md shadow-2xl  hover:translate-y-2 duration-300  hover:shadow-red-700/50"
        value={value}
        onClick={handler}
      >
        Add by 1
      </button>
      <button
        className="    p-2 bg-blue-300 border-2 rounded-md shadow-2xl  duration-300 hover:translate-y-2  hover:shadow-red-700/50"
        value={value}
        onClick={subhandler}
      >
        decrease by 1
      </button>

    
    </div>

   <div>
    <button onClick={reset} className="  p-2 bg-blue-300 border-2 rounded-md shadow-2xl  hover:translate-y-2 duration-300  hover:shadow-red-700/50"  value={value}>Reset</button>
   </div>

   </div>
  );
}

export default Counter;




