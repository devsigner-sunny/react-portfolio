import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

function BrowserContainer({ children }) {
  return (
    <div className="w-full border-2 border-black border-solid rounded-lg browser-container">
      <div className="flex gap-1 p-2 bg-transparent border-b-2 border-black">
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
      </div>
      <div className="browser-container__contents">{children}</div>
    </div>
  );
}
export default BrowserContainer;
