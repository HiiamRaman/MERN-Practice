// import React from "react";

// function Pricing() {
//   return (
//     <div className="min-h-screen bg-red-300 flex justify-center items-center ">
//       <div className="  grid grid-cols-1 md:grid-cols-3 gap-8 ">
//         <div className="font-bold p-5   bg-white shadow-lg   rounded  border border-black">
//           <h1>Basic</h1>
//         </div>
//         <div className="font-bold  p-5    bg-yellow-100 shadow-lg rounded  border border-black">
//           <h1>Pro</h1>
//         </div>
//         <div className="font-bold  p-5  bg-black shadow-lg rounded   text-white  border-black">
//           <h1>Premium</h1>//
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;

//Rebuilding price table into resuable component and on scalable way

import React from "react";

function PricingCard({ name, price }) {
  return (
    <div className=" border-2 p-8 m-6  rounded-md bg-blue-200 shadow-lg text-center ">
      <h2 className="font-bold ">{name} </h2>
      <p className="">{price}</p>
      <button className="border-2 mt-4 bg-white font-semibold rounded p-2 cursor-pointer shadow-lg">Buy Now</button>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="  flex justify-center  ">
      <div className=" flex  gap-8 ">
        <PricingCard name="Basic" price="$10" />
        <PricingCard name="Pro" price="$20" />
        <PricingCard name="Premium " price="$40" />
      </div>
    </div>
  );
}
