import React from "react";

import shoesData from "../Data/data.js";

export function ShoeCard({src,name,size,colorVariant,des,price}) {
  return (
    <div className="flex justify-center mx-20  w-80    ">
      <div className="     border-1 rounded-md h-130 w-100 flex flex-col cursor-pointer  shadow-2xl hover:translate-y-2 hover:shadow-blue-300 ">
        <div className="">
          <img
            className="    rounded-md  h-60 w-full mb-5 object-cover "
            src={src}
            alt="Photo"
          />
        </div>

        <div className=" pl-3 ">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex   gap-2 m-2  ">
              <p className="border-1 rounded-md p-2 ">{size}</p>
              <p className="border-1 rounded-md w-28 p-2 ">{colorVariant}</p>
            </div>
            <p>
              {des}
            </p>
          </div>

          <div className=" flex  justify-between px-4 my-9">
            <div className="flex flex-col">
              <p className="font-semibold">Price</p>
              <p className="text-2xl font-bold">{price}</p>
            </div>
            <button className="bg-purple-700 shadow-lg hover:translate-y-1  transition p-3 rounded-lg cursor-pointer text-white hover:bg-indigo-200 font-semibold transition-full ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Render() {
  return (
    <div >
      <div className="grid grid-cols-3 gap-10  ">
        {shoesData.map((item, index) => (
          <div key={index}>
            {/* <ShoeCard  src={item.src} name={item.name} size={item.size}  colorVariant={item.colorVariant} des={item.des} price={item.price}   /> */}
            <ShoeCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
