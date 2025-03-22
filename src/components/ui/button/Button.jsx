import React from "react";
import "./button.css";
export default function Button({
  variant = "default",
  children,
  className,
  ...props
}) {
  return (
    <button
      className={`btn ${className ? className : ""} ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}
