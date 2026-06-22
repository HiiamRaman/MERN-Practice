import React from "react";
import data from "../Data/data";
export function Usercard({ name, age, profession ,src}) {
  return (
    <div className="   flex justify-center     ">
      <div className="flex flex-col  shadow-2xl  h-100 w-100 bg-white  rounded-lg justify-center items-center gap-2 cursor-pointer ">
       <img className="rounded-lg h-80" src={src} alt="" />
        <h1 className="text-4xl ">Name: {name} </h1>
        <p className="text-2xl ">Age : {age}</p>
        <p className="text-xl ">profession : {profession} </p>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="  bg-red-200    ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4  " >
        {data.map((item, index) => (
          <div key={index}>
            <Usercard src = {item.src} name={item.name}  age = {item.age}  profession={item.profession}/>
          </div>
        ))}
      </div>
    </div>
  );
}
