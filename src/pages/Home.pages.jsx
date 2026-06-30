import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

function Homepages() {
  return (
    <div className="bg-[#f2e9e9] min-h-screen">
      <nav className="flex justify-between bg-white p-8">
        <div className=" italic font-semibold text-2xl">
          <h1 className="text-blue-500">Style Wings</h1>
        </div>

        <div>
          <ul className="flex gap-5  ">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Features</li>
          </ul>
        </div>
        <div className=" flex gap-3  text-lg">
          <CiSearch />
          <BsCart4 />
          <CiHeart />
        </div>
      </nav>
      <div className="flex gap-20 m-30  ">
        <div className=" text-shadow-lg flex flex-col gap-5  ">
          <p className="text-6xl tracking-widest  text-[#2f634d]">
            A tradition of <br /> excellent Since
          </p>
          <p>
            Lorem ipsum dolor sit amet consecteturm laboriosam dolor quis at{" "}
            <br />
            neque, illum iure molestias! Autem saepe rem dolore modi illo quod.
          </p>
          <button className="bg-blue-300 w-40 p-3 text-white shadow-2xl rounded-md">
            {" "}
            SHOP NOW{" "}
          </button>
          <div className="flex ">
            <p className="text-2xl ">UP TO</p>
            <p className="text-4xl">70 % </p>
            <p>OFF</p>
          </div>
        </div>

        <div className=" ">
          <img className="h-100 object-cover rounded-md w-100"
            src="https://imgs.capitalxtra.com/images/178289?crop=16_9&width=660&relax=1&format=webp&signature=LUOFWH4RWa1CAH89c3OkJKnorxw="
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepages;
