"use client";

import React, { useState } from "react";

//lucide icons

import { User, Lock, ChevronDown, ChevronUp } from "lucide-react";

//zustand

import { useStore } from "@/store/store";

const side = () => {
  const [openSide, setOpenSide] = useState(false);
  const openbar = useStore((state) => state.bar);

  // mark ito yung sideclick
  function handleSideClick() {
    setOpenSide(!openSide);
  }

  return (
    <aside
      className={`${
        openbar ? "w-[80px]" : "w-[300px]"
      } transition-all border-r borde-b h-screen bg-white text-primary fixed`}
    >
      <div className="p-2 flex items-center justify-center">
        <img
          src="/images/sa2.png"
          className="w-16"
          alt="picture"
          loading=""
        ></img>
      </div>

      <div className={`p-4 flex flex-col gap-4`}>
        {/* //Dashboard */}
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">{openbar ? "..." : "Dashboard"}</h1>
          <ul
            className={`flex flex-col gap-2 xl:h-[146px] ${
              openbar ? "p-0" : "p-2"
            }`}
          >
            <li
              className={`${
                openbar ? "justify-center" : "justify-normal"
              } flex gap-4 text-xs items-center  p-2 bg-rose-700 text-white rounded-md cursor-pointer`}
            >
              <User size={16} />
              {openbar ? "" : "Home"}
            </li>
            <li
              className={`flex gap-4 text-xs items-center  p-2 ${
                openbar ? "justify-center" : "justify-normal"
              }  `}
            >
              <User size={16} />
              {openbar ? "" : "Modern"}
            </li>
            <li
              className={`flex gap-4 text-xs items-center  p-2 ${
                openbar ? "justify-center" : "justify-normal"
              } `}
            >
              <User size={16} />
              {openbar ? "" : "Modern"}
            </li>
          </ul>
        </div>

        {/* Home */}
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">{openbar ? "..." : "Reports"}</h1>
          <ul className="flex flex-col gap-1.5">
            <div
              className={`bg-rose-700 flex items-center ${
                openbar ? "justify-center" : "justify-between"
              } text-white rounded-md cursor-pointer`}
              onClick={handleSideClick}
            >
              <li
                className={`flex gap-4 text-xs items-center justify-center p-2 `}
              >
                <User size={16} />
                {openbar ? "" : "Modern"}
              </li>
              {/* {openSide ? (<ChevronDown className="mx-2 hidden" size={16} /> ) : ( <ChevronUp className="mx-2 hidden " size={16} /> )} */}
              <ChevronDown
                className={`mx-2  ${openbar ? "hidden" : "flex"}`}
                size={16}
              />
            </div>
            <div
              className={`bg-slate-100 rounded-sm transition-all ease-in-out ${
                openSide
                  ? "h-auto opacity-100 gap-2 flex flex-col "
                  : "h-0 gap-0 "
              } `}
            >
              <li
                className={` gap-4 text-xs items-center  p-2  ${
                  openSide ? "flex" : "hidden "
                } ${openbar ? "justify-center" : "justify-start"}`}
              >
                <User size={16} />
                {openbar ? "" : "Modern"}
              </li>
              <li
                className={` gap-4 text-xs items-center p-2 ${
                  openSide ? "flex " : "hidden"
                }  ${openbar ? "justify-center" : "justify-start"}`}
              >
                <User size={16} />
                {openbar ? "" : "Modern"}
              </li>
            </div>
            <li className={`flex gap-4 text-xs items-center p-2 ${openbar ? "justify-center" : "justify-start"}   `}>
              <User size={16} />
              {openbar ? "" : "Modern"}
            </li>
            <li className={`flex gap-4 text-xs items-center p-2  ${openbar ? "justify-center" : "justify-start"} `}>
              <User size={16} />
              {openbar ? "" : "Modern"}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default side;
