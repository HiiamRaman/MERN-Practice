import React from "react";
  
function Pricing() {
  return (
    <div className="min-h-screen bg-red-300 flex justify-center items-center ">
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="font-bold p-5   bg-white shadow-lg   rounded  border border-black">
          <h1>Basic</h1>
        </div>
        <div className="font-bold  p-5    bg-yellow-100 shadow-lg rounded  border border-black">
          <h1>Pro</h1>
        </div>
        <div className="font-bold  p-5  bg-black shadow-lg rounded   text-white  border-black">
          <h1>Premium</h1>
        </div>
      </div>
    </div>
  );
}

export default Pricing;







