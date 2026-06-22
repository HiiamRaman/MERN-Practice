import React from "react";

function ProfileCard() {
  return (
    <div className=" min-h-screen  flex justify-center items-center  bg-red-100     ">
      <div className=" bg-white rounded-md p-6 shadow-md w-80  flex flex-col items-center space-y-3">
        <img  
          className=" rounded-full w-20 h-20  object-cover  "
          src="/pp.jpg"
          alt="Profile-picture"
        />

        <h1 className="font-semibold text-lg text-gray-800">Raman Singh Chauhan</h1>
        <p className="font-small text-gray-500">Will be God of Computer</p>

        <div>
          <button className="bg-blue-300  hover:bg-orange-200 transition rounded-full text-white px-4 py-1.5" >Follow For More </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;











