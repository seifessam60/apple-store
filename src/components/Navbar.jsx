import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-6 sm:px-10 px-5 w-full'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt='Apple logo' width={14} height={18} />
        <div className='flex justify-center flex-1 max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              className='px-5 text-sm text-gray-100 hover:text-white transition-all cursor-pointer'
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline max-sm:flex-1 max-sm:justify-end gap-7">
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
