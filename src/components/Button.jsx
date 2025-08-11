import React from "react";

const ColorButton = {
  PRIMARY:
    "bg-white text-gray-800 shadow-md font-poppins font-semibold hover:bg-neutral-200",
  SECONDARY:
    "bg-gray-100 text-gray-800 shadow-md font-poppins font-semibold hover:bg-neutral-200",
};

const Button = ({ children, color, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`p-2 ${ColorButton[color || "PRIMARY"]} w-100 rounded-md`}
    >
      <div className="text-sky-500">{children}</div>
    </button>
  );
};

export default Button;
