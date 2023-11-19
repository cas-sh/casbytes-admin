import React from "react";

export function FormLoadingUI({ inputIndex = 2, editor = false }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-12 w-32 text-xl  rounded-md bg-slate-200 animate-pulse"></div>
      {Array(inputIndex)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="h-12 rounded-md bg-slate-300 animate-pulse"
          ></div>
        ))}
      {editor ? (
        <div className="h-40 rounded-md bg-slate-300 animate-pulse"></div>
      ) : null}
      <div className="h-12 w-28 self-end rounded-md bg-slate-300 animate-pulse"></div>
    </div>
  );
}
