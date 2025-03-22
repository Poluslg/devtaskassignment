import React from "react";

export default function Heading({ title, desc }) {
  return (
    <div className="w-2/3 flex flex-col">
      <h1 className="text-[28px] font-semibold text-[#1D2226]">{title}</h1>
      <p className="text-lg text-[#1D2226]/50 font-medium">{desc}</p>
    </div>
  );
}
