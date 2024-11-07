import React from "react";
import { FaRegStar } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
function NavBar() {
  return (
    <header className=" flex  md:flex-row flex-col shadow-md gap-2 p-2 sticky top-0">
      <div className="flex flex-row items-center justify-around w-full md:w-1/2">
        <h2 className="text-bold font-bold text-xl font-mono">Welcome Board</h2>
        <div className="bg-blue-400 p-1 rounded-sm text-lg md:text-xl">
          <FaRegStar />
        </div>
        <div className="bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500 ">
          Personal
        </div>
        <div className="bg-blue-400 p-1 rounded-sm flex flex-row items-center gap-2">
          <AiFillLock />
          <span>Private</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end w-full md:w-1/2 space-x-3">
        <div className="bg-blue-400 hover:cursor-pointer hover:pl-5 hover:bg-green-500 transition-all duration-200 ease-in-out p-1 flex hover:gap-3 flex-row gap-2 items-center rounded-sm">
          <IoIosHome />
          <span> Home</span>
        </div>
        <div className="bg-blue-400 p-1 rounded-sm">Show menu</div>
      </div>
    </header>
  );
}

export default NavBar;
