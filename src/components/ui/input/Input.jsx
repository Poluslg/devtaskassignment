import React from "react";
import "./input.css";

export default function Input({
  variant = "defaultinput",
  children,
  className,
  lebel,
  required = false,
  ...props
}) {
  return (
    <div className="w-full h-12 flex flex-col p-1 border border-[#CBCBCB] rounded-md  relative">
      <label className="text-[13px] text-[#6C25FF] absolute -top-2.5 left-3 bg-[#F7F8F9] px-2">
        {lebel}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        // className={`input ${className ? className : ""} ${variant}`}
        className={`h-full px-3 text-base font-extralight focus:outline-none ${
          className ? className : ""
        } ${variant}`}
        {...props}
        required={required}
      >
        {children}
      </input>
    </div>
  );
}
