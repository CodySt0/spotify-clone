import React from "react";
import { assets } from "../assets/assets";

//Can't figure out why the nav section is not showing on screen :(
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xL cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xL cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className=" bg-purple-500 text-black flex items-center justify-center">
            C
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2XL cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2XL cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2XL cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
