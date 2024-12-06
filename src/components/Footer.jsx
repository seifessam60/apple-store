import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div>
          <p className='text-xs font-semibold text-gray'>
            More Ways To Shop:{" "}
            <span className='underline text-blue'>Find an Apple Store</span> Or{" "}
            <span className='underline text-blue'>Other Retailer</span> Near
            You.
          </p>
          <p className='text-xs font-semibold text-gray'>
            Or Simply Call 01144654953{" "}
          </p>
        </div>
        <div className='bg-neutral-700 h-[1px] w-full my-3' />
        <div className='flex flex-col md:flex-row justify-between md:items-center'>
          <p className='text-xs font-semibold text-gray mb-1'>
            CopyRights @ {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>
          <div className='flex'>
            {footerLinks.map((link, i) => (
              <p className='text-xs font-semibold text-gray mx-1' key={i}>
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className='mx-2'> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
