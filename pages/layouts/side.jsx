import React from "react";

//lucide icons

import { User, Lock } from "lucide-react";
import { ChevronDown } from "lucide-react";

const side = () => {
  return (
    <aside className="w-[300px] border-r borde-b h-screen bg-white text-primary fixed">
      <div className="p-4 flex items-center justify-center">
        <img
          src="/images/sa2.png"
          className="w-24"
          alt="picture"
          loading=""
        ></img>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Dashboard</h1>

          <ul className="p-4 flex flex-col gap-2">
            <li className="flex gap-4 text-xs items-center p-2 bg-rose-700 text-white rounded-md">
              <User size={16} />
              Modern
            </li>
            <li className="flex gap-4 text-xs items-center p-2  ">
              <User size={16} />
              Modern
            </li>
            <li className="flex gap-4 text-xs items-center p-2 ">
              <User size={16} />
              Modern
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Home</h1>

          <ul className="p-4 flex flex-col gap-2">
            <div className="bg-rose-700 flex items-center justify-between  text-white rounded-md">
              <li className="flex gap-4 text-xs items-center p-2 ">
                <User size={16} />
                Modern
              </li>
              <ChevronDown className="mx-2" size={16} />
            </div>
            <div className="flex flex-col  bg-slate-100 h-0 opacity-0 cursor-none ">
              <li className="flex gap-4 text-xs items-center p-2  ">
                <User size={16} />
                Modern
              </li>
              <li className="flex gap-4 text-xs items-center p-2 ">
                <User size={16} />
                Modern
              </li>
            </div>
            <li className="flex gap-4 text-xs items-center p-2  ">
              <User size={16} />
              Modern
            </li>
            <li className="flex gap-4 text-xs items-center p-2 ">
              <User size={16} />
              Modern
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default side;
