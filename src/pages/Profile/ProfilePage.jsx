import React from "react";
import CameraIcon from "../../components/icons/CameraIcon";

export default function ProfilePage() {
  return (
    <div className="Box justify-start">
      <header
        className="w-full h-16 bg-white text-lg font-medium p-5"
        style={{
          boxShadow: " 0px 3px 6px #00000007",
        }}
      >
        Account Settings
      </header>
      <div className="p-5 space-y-5">
        <div className="flex gap-3">
          <div className="relative">
            <img
              src="/imgs/Ellipse 114@2x.png"
              alt="Profile Picture"
              className="h-[76px] w-[76px]"
            />
            <button
              className="h-5 w-5 bg-[#6C25FF] flex items-center justify-center rounded-full p-1 absolute bottom-1 left-14 cursor-pointer"
              onClick={() => alert("Change Profile Picture")}
            >
              <CameraIcon />
            </button>
          </div>
          <span>
            <h1 className="text-[15px] font-medium">Marry Doe</h1>
            <p className="text-sm">Marry@Gmail.Com</p>
          </span>
        </div>
        <div>
          <p className="text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
      <div className="border-1 border-l-0 border-r-0 border-dotted h-full border-[#CBCBCB] w-full"></div>
    </div>
  );
}
