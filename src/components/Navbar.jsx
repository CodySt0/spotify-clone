import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className=" bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            C
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
