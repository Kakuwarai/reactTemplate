"use client";
import React from "react";

//lucide icons
import { Menu } from "lucide-react";

import { useStore } from "@/store/store";

export const header = () => {
  const openbar = useStore((state) => state.bar);
  const setopenbar = useStore((state) => state.setBar);

  function handleBarsClick() {
    setopenbar(!openbar);
  }

  return (
    <>
      <nav className=" py-4 w-full bg-white border-b top-0 sticky ">
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-4">
            <button>
              <Menu onClick={handleBarsClick} className="text-pgray" />
            </button>
            <div className="flex gap-2 items-center text-xs ">
              <h1 className="font-bold text-pgray">Welcome,</h1>
              <p className="text-xs ">Nathalie Babinaeu</p>
            </div>
          </div>

          <div className="bg-primary  rounded-full p-2 flex items-center justify-center  cursor-pointer ">
            <h1 className="text-white">NB</h1>
            <div className="relative">
              <div className="absolute cursor-default bg-white xl:w-[250px] -right-6  top-[2.2rem] border-t h-[200px] rounded-md shadow-md flex flex-col justify-between ">
            
               
                  <div className="p-4 border-b w-full ">
                    <h1 className="text-xs">Nathalie Babinaeu</h1>
                  </div>
                  <div className="p-4 w-full">
                    <h1 className="text-xs">Nathalie Babinaeu</h1>
                  </div>
             
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default header;
