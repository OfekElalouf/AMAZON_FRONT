import React from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import SearchBar from "../SearchBar/SearchBar";


const Navbar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* {left} */}
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src="../../../public/images/amazon.png"
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:textbase font-bold">Israel</div>
          </div>
        </div>
        {/* {middle} */}
        <div className="flex grow relative items-center">
            <SearchBar/>
        </div>

        {/* {right} */}
        <div className="flex items-center m-4">
        <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:textbase font-bold">Accounts & Lists</div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:textbase font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]"/>
            <div className="mt-7 text-xs xl:text-sm font-bold">Shopping Cart</div>
            
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
