import React from "react";
import data from "../Data/data";
export function Usercard({ name, age, profession, src }) {
  return (
    <div className="flex justify-center p-6">
      <div className="flex flex-col bg-red-500  w-[350px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30">
        {/* Image: Changed to object-cover so it doesn't squish if the ratio changes */}
        <img className="h-64 w-full object-cover" src={src} alt={name} />

        {/* Text Content Wrapper: Added padding (p-5) so text doesn't touch the edge */}
        <div className="p-5 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-800">Name: {name}</h1>
          <p className="text-lg text-gray-600 font-medium">Age: {age}</p>

          {/* Dynamic badge for profession instead of plain text */}
          <div className="mt-2">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full border border-green-200">
              {profession}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card1() {
  return (
    <div className="  bg-red-200    ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4  ">
        {data.map((item, index) => (
          <div key={index}>
            <Usercard
              src={item.src}
              name={item.name}
              age={item.age}
              profession={item.profession}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
