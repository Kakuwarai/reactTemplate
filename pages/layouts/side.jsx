"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
//shadcn

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

//lucide icons

import {
  User,
  Lock,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
} from "lucide-react";

//zustand

import { useStore } from "@/store/store";

import useWindowDimensions from "../function/WindowDimension";

const side = () => {
  const router = useRouter();

  const pathname = usePathname();
  const [openSide, setOpenSide] = useState(false);
  const openbar = useStore((state) => state.bar);
  const setopenbar = useStore((state) => state.setBar);
  const { width } = useWindowDimensions();

  function handleSideClick() {
    setOpenSide(!openSide);
  }

  // mark and mon kapag inopen mo to yung desktop at yung desktop bar neto bubukas

  // useEffect(() => {
  //   if (width >= 1500) {
  //     setopenbar(!openbar);
  //   }
  // }, []);

  return (
    <TooltipProvider>
      <aside
        className={`${
          openbar
            ? "w-[80px] hidden lg:block opacity-100  "
            : "block w-[300px] "
        } fixed   transition-all border-r border-b h-screen bg-white dark:bg-slate-950 text-primary `}
      >
        <div
          className={`p-[0.9rem] flex items-center  justify-center ${
            openbar ? "gap-0" : "gap-4"
          } `}
        >
          <img
            src="/images/sa2.png"
            className="max-w-[47px]"
            alt="picture"
            loading=""
          />

          <h1 className="text-xs font-bold">
            {openbar ? "" : "System Template"}
          </h1>
        </div>

        <div className={`py-10 px-4 h-screen flex flex-col gap-4`}>
          {/* //Dashboard */}

          <Tooltip disableHoverableContent="false">
            <div className="flex flex-col gap-2">
              <TooltipTrigger
                className={`flex items-start justify-start ${
                  openbar ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <h1 className="text-sm font-bold">
                  {openbar ? "..." : "Home"}
                </h1>
                {openbar ? (
                  <TooltipContent side="left" asChild>
                    <p>Home</p>
                  </TooltipContent>
                ) : (
                  ""
                )}
              </TooltipTrigger>

              <ul
                className={`flex flex-col gap-2 xl:h-[146px] ${
                  openbar ? "p-0" : "p-2"
                }`}
              >
                <Tooltip disableHoverableContent="false">
                  <TooltipTrigger>
                    <li
                      onClick={() => router.push("/dashboard")}
                      className={`${
                        openbar ? "justify-center" : "justify-normal"
                      } ${
                        pathname === "/dashboard"
                          ? "bg-rose-700 text-white"
                          : "bg-none"
                      } flex gap-4 text-xs items-center  p-2  rounded-md cursor-pointer `}
                    >
                      <LayoutDashboard size={16} />
                      {openbar ? "" : "Dashboard"}
                    </li>
                    {openbar ? (
                      <TooltipContent side="left" asChild>
                        <p>Dashboard</p>
                      </TooltipContent>
                    ) : (
                      ""
                    )}
                  </TooltipTrigger>
                </Tooltip>

                <Tooltip disableHoverableContent="false">
                  <TooltipTrigger>
                    <li
                      onClick={() => router.push("/admindashboard")}
                      className={`${
                        openbar ? "justify-center" : "justify-normal"
                      } ${
                        pathname === "/admindashboard"
                          ? "bg-rose-700 text-white"
                          : "bg-none"
                      } flex gap-4 text-xs items-center  p-2  rounded-md cursor-pointer `}
                    >
                      <LayoutDashboard size={16} />
                      {openbar ? "" : "Admin Dashboard"}
                    </li>
                    {openbar ? (
                      <TooltipContent side="left" asChild>
                        <p>Admin Dashboard</p>
                      </TooltipContent>
                    ) : (
                      ""
                    )}
                  </TooltipTrigger>
                </Tooltip>

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
          </Tooltip>

          {/* Home */}

          <Tooltip disableHoverableContent="false">
            <div className="flex flex-col gap-2">
              <TooltipTrigger
                className={`flex items-start justify-start ${
                  openbar ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <h1 className="text-sm font-bold">
                  {openbar ? "..." : "Reports"}
                </h1>
                {openbar ? (
                  <TooltipContent side="left" asChild>
                    <p>Home</p>
                  </TooltipContent>
                ) : (
                  ""
                )}
              </TooltipTrigger>

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
                  <ChevronDown
                    className={`mx-2  ${openbar ? "hidden" : "flex"}`}
                    size={16}
                  />
                </div>
                <div
                  className={`bg-slate-100 rounded-sm transition-all ease-in-out dark:bg-slate-950 ${
                    openSide
                      ? "h-[80px] opacity-100 gap-2 flex flex-col"
                      : "h-0 gap-0  "
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
                <li
                  className={`flex gap-4 text-xs items-center p-2 ${
                    openbar ? "justify-center" : "justify-start"
                  }   `}
                >
                  <User size={16} />
                  {openbar ? "" : "Modern"}
                </li>
                <li
                  className={`flex gap-4 text-xs items-center p-2  ${
                    openbar ? "justify-center" : "justify-start"
                  } `}
                >
                  <User size={16} />
                  {openbar ? "" : "Modern"}
                </li>
              </ul>
            </div>
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default side;
