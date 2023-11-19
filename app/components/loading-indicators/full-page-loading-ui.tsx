import React from "react";
import { Loader2 } from "lucide-react";
import logo from "~/assets/logo.png";

export function FullPageLoadingUI() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="fixed inset-0 bg-gray-200 opacity-60"></div>
      <div className="drop-shadow-xl flex flex-col justify-center items-center bg-sky-600/10 rounded-lg p-8">
        <img src={logo} alt="CASBytes" width={200} className="animate-bounce" />
        {/* <FaSpinner className="text-blue-500 animate-spin text-4xl" /> */}
        <Loader2 className="text-blue-500 animate-spin text-4xl" />
      </div>
    </div>
  );
}
