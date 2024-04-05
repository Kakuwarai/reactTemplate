import React from "react";

export const footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();

  return (
    <>
      <div className="p-4 text-xs mx-4 rounded-t">
        <p className="text-xs ">{`© ${currentYear} Group NB. All Rights Reserved.`}</p>
      </div>
    </>
  );
};
export default footer;
