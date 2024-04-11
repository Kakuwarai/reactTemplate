"use client";
import React, { useState } from "react";

//lucide icons
import { Menu, LogOut, BellRing, Sun } from "lucide-react";

import { useStore } from "@/store/store";

export const header = () => {
  const openbar = useStore((state) => state.bar);
  const setopenbar = useStore((state) => state.setBar);

  const [rightSideBar, setrightSideBar] = useState(false);
  const [rightSideBarNotif, setrightSideBarNotif] = useState(false);

  function handleBarsClick() {
    setopenbar(!openbar);
  }

  function handleBarsClickRight() {
    setrightSideBar(!rightSideBar);
    //false other bars
    setrightSideBarNotif(false);

  }
  function handleBarsClickRightNotif() {
    setrightSideBarNotif(!rightSideBarNotif);

    //false other bars
    setrightSideBar(false);
  
  }



  return (
    <>
      <nav className=" py-4 w-full bg-white border-b top-0 sticky ">
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-4">
            <button>
              <Menu onClick={handleBarsClick} className="text-pgray" />
            </button>
            <div className=" gap-2 items-center text-xs hidden md:flex ">
              <h1 className="">Welcome,</h1>
              <p className="text-xs font-semibold ">Nathalie Babinaeu</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center gap-4 px-4">
              <Sun
                size={16}
                className="cursor-pointer"
              />
              <BellRing
                onClick={handleBarsClickRightNotif}
                className="cursor-pointer"
                size={16}
              />
            </div>
            <div
              className="bg-primary  rounded-full p-2 flex items-center justify-center  cursor-pointer "
              onClick={handleBarsClickRight}
            >
              <h1 className="text-white">NB</h1>
            </div>

      
           
            {/* //RING LOGO CLICK */}
            <div className="relative">
              <div
                className={`${
                  rightSideBarNotif ? "h-[200px]" : "h-[0]"
                } transition-all absolute cursor-default bg-white w-[200px] right-0  top-[2.23rem] border-t  rounded-md shadow-md flex flex-col justify-between z-50 `}
              >
                <div
                  className={`${
                    rightSideBarNotif ? "flex" : "hidden"
                  }  p-4 border-b w-full  justify-center cursor-pointer `}
                >
                  <h1 className="text-xs font-semibold">Notification</h1>
                </div>
                <div
                  className={`${
                    rightSideBarNotif ? "flex" : "hidden"
                  } p-4 w-full  bg-gray-50 hover:bg-gray-100 items-center justify-center border-t cursor-pointer gap-4 group`}
                >
                  <LogOut size={16} className="group-hover:text-rose-700" />
                  <h1 className="text-xs">Logout</h1>
                </div>
              </div>
            </div>
            {/* //NB LOGO CLICK */}
            <div className="relative">
              <div
                className={`${
                  rightSideBar ? "h-[200px]" : "h-[0]"
                } transition-all absolute cursor-default bg-white w-[200px] right-0  top-[2.23rem] border-t  rounded-md shadow-md flex flex-col justify-between z-50 `}
              >
                <div
                  className={`${
                    rightSideBar ? "flex" : "hidden"
                  }  p-4 border-b w-full  justify-center cursor-pointer `}
                >
                  <h1 className="text-xs font-semibold">Nathalie Babinaeu</h1>
                </div>
                <div
                  className={`${
                    rightSideBar ? "flex" : "hidden"
                  } p-4 w-full  bg-gray-50 hover:bg-gray-100 items-center justify-center border-t cursor-pointer gap-4 group`}
                >
                  <LogOut size={16} className="group-hover:text-rose-700" />
                  <h1 className="text-xs">Logout</h1>
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
