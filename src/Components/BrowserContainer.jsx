import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

function BrowserContainer({ children }) {
  return (
    <div className="w-full border-2 border-solid rounded-lg border-slate-900 browser-container">
      <div className="flex gap-1 p-2 bg-transparent border-b-2 border-slate-900">
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
      </div>
      <div className="browser-container__contents">{children}</div>
    </div>
  );
}
export default BrowserContainer;
