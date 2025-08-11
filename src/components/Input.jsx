import React from "react";

const InputText = ({ placeholder, type, onChange, value, name }) => {
  return (
    <input
      name={name}
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="p-1 border-b-2 w-lg outline-none"
    />
  );
};

export default InputText;
