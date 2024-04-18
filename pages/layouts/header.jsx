"use client";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { useTheme } from "next-themes";

//shadcn

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

//lucide icons
import { Menu, LogOut, BellRing, Sun, MoonStar } from "lucide-react";

import { useStore } from "@/store/store";

export const header = () => {
  const [themeLs, setThemeLs] = useState("");
  const { setTheme } = useTheme();

  const openbar = useStore((state) => state.bar);
  const setopenbar = useStore((state) => state.setBar);

  const [rightSideBar, setrightSideBar] = useState(false);
  const [rightSideBarNotif, setrightSideBarNotif] = useState(true);

  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

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

  function handleClickTheme() {
    if (themeLs == "light") {
      setTheme("dark");
      setThemeLs("dark");
    } else {
      setTheme("light");
      setThemeLs("light");
    }
  }

  useEffect(() => {
    const x = localStorage.getItem("theme");
    if (x != null) {
      setThemeLs(x);
    }
  }, []);

  function logoutUser() {
    Cookies.remove("uD");
    location.reload();
  }

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (
        !ref.current?.contains(event.target) &&
        !ref1.current?.contains(event.target) &&
        !ref2.current?.contains(event.target)
      ) {
        setrightSideBar(false);
        setrightSideBarNotif(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, ref1, ref2]);

  return (
    <>
      <nav
        onClick={(e)=>e.preventDefault()}
        className=" py-4 w-full bg-white dark:bg-slate-950 border-b top-0 sticky "
      >
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-4">
            <button onClick={handleBarsClick} id="oButton">
              <Menu  className="text-pgray" />
            </button>
            <div className=" gap-2 items-center text-xs hidden md:flex ">
              <h1 className="">Welcome,</h1>
              <p className="text-xs font-semibold ">Nathalie Babinaeu</p>
            </div>
          </div>
          <div ref={ref2} className="flex items-center ">
            <div className="flex items-center gap-4 px-4">
              <div onClick={handleClickTheme}>
                {themeLs == "light" ? (
                  <MoonStar size={16} className="cursor-pointer  " />
                ) : (
                  <Sun size={16} className="cursor-pointer" />
                )}
              </div>

              <BellRing
                onClick={handleBarsClickRightNotif}
                className="cursor-pointer"
                size={16}
              />
            </div>
            <button
              className="bg-primary  text-white rounded-full p-2 flex items-center justify-center  cursor-pointer "
              onClick={handleBarsClickRight}
            >
              NB
            </button>
            {/* //RING LOGO CLICK */}
            <div className="relative">
              <div
                ref={ref1}
                className={`${
                  rightSideBarNotif ? "h-[440px] lg:h-[410px]" : "h-[0]"
                } transition-all ease-in-out absolute cursor-default bg-white w-[250px] right-0  top-[2.23rem]  rounded-md shadow-md flex flex-col z-50 lg:w-[350px] `}
              >
                <div
                  className={`${
                    rightSideBarNotif ? "flex" : "hidden"
                  }  p-4 border-b w-full  justify-center cursor-pointer `}
                >
                  <h1 className="text-xs font-semibold">Notification</h1>
                </div>

                <div className="pt-4 px-4 cursor-pointer space-y-2">
                  <div
                    className={`${
                      rightSideBarNotif ? "flex flex-col gap-1.5 " : "hidden"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className=" w-12  bg-gray-50">
                        <img
                          src="https://ui.shadcn.com/avatars/01.png"
                          loading="lazy"
                          alt="icon-picture"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="w-full ">
                          <p className="text-xs text-primary font-medium">
                            GroupNB
                          </p>
                          <p className="text-xs text-pgray">
                            groupnb123@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-ellipsis overflow-hidden ...">
                      The longest word in any of the major English language
                      dictionaries is pneumonoultramicroscopicsilicovolcan
                    </p>
                    <hr className="mt-2" />
                  </div>
                  <div
                    className={`${
                      rightSideBarNotif ? "flex flex-col gap-1.5 " : "hidden"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className=" w-12  bg-gray-50">
                        <img
                          src="https://ui.shadcn.com/avatars/01.png"
                          loading="lazy"
                          alt="icon-picture"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="w-full ">
                          <p className="text-xs text-primary font-medium">
                            GroupNB
                          </p>
                          <p className="text-xs text-pgray">
                            groupnb123@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-ellipsis overflow-hidden ...">
                      The longest word in any of the major English language
                      dictionaries is pneumonoultramicroscopicsilicovolcan
                    </p>
                    <hr className="mt-2" />
                  </div>
                  <div
                    className={`${
                      rightSideBarNotif ? "flex flex-col gap-1.5 " : "hidden"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className=" w-12  bg-gray-50">
                        <img
                          src="https://ui.shadcn.com/avatars/01.png"
                          loading="lazy"
                          alt="icon-picture"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="w-full ">
                          <p className="text-xs text-primary font-medium">
                            GroupNB
                          </p>
                          <p className="text-xs text-pgray">
                            groupnb123@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-ellipsis overflow-hidden ...">
                      The longest word in any of the major English language
                      dictionaries is pneumonoultramicroscopicsilicovolcan
                    </p>
                    <hr className="mt-2" />
                  </div>
                </div>
                <div
                  className={`${
                    rightSideBarNotif ? "flex" : "hidden"
                  } p-4 w-full  bg-gray-50 hover:bg-gray-100 items-center justify-center  cursor-pointer gap-4 group`}
                >
                  <h1 className="text-xs">View All</h1>
                </div>
              </div>
            </div>
            {/* //NB LOGO CLICK */}
            <div className="relative">
              <div
                ref={ref}
                className={`${
                  rightSideBar ? "h-[200px]" : "h-[0]"
                } transition-all absolute cursor-default bg-white w-[200px] right-0  top-[2.23rem]   rounded-md shadow-md flex flex-col justify-between z-50 `}
              >
                <div
                  className={`${
                    rightSideBar ? "flex" : "hidden"
                  }  p-4 border-b w-full  justify-center cursor-pointer `}
                >
                  <h1 className="text-xs font-semibold">Nathalie Babinaeu</h1>
                </div>
                <div
                  onClick={logoutUser}
                  className={`${
                    rightSideBar ? "flex" : "hidden"
                  } p-4 w-full  bg-gray-50 hover:bg-gray-100 items-center justify-center  cursor-pointer gap-4 group`}
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
