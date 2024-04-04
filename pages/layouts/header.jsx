import React from "react";

//lucide icons

import { Menu } from "lucide-react";

export const header = () => {
  return (
    <>
      <nav className=" py-4 w-full bg-white border-b top-0 sticky ">
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-4">
            <button>
              <Menu className="text-pgray" />
            </button>
            <div className="flex gap-2 items-center text-xs ">
              <h1 className="font-bold text-pgray">Welcome,</h1>
              <p className="text-xs ">Nathalie Babinaeu</p>
            </div>
          </div>
          <div className="text-white bg-primary  rounded-full p-2 flex items-center justify-center cursor-pointer ">
            <h1 className="">NB</h1>
          </div>
        </div>
      </nav>
    </>
  );
};
export default header;
