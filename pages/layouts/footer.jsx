import React from "react";

export const footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();

  return (
    <>
      <div className="py-4 bg-primary rounded-sm text-white text-xs px-4">
        <p className="text-xs text-center">{`© ${currentYear} Group NB. All Rights Reserved.`}</p>
      </div>
    </>
  );
};
export default footer;
