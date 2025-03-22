import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="Box">
      <div className="h-full flex flex-col items-center justify-center gap-5 p-5">
        <h1 className="text-3xl font-semibold text-red-400">404 Page Not Found</h1>
        <p className="text-sm">The page you are looking for does not exist.</p>
        <Link
          to={"/"}
          className="bg-[#cbcbcb] hover:bg-blue-400 transition-colors text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
