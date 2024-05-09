import React from "react";

export const SearchButton = ({ value, onChange })=> {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="focus:outline-none px-2"
     
    />
  );
}


