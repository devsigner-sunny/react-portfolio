import React from 'react';
import { VscCircleLargeFilled } from 'react-icons/vsc';

function BrowserContainer({ children }) {
  return (
    <div className="w-full border-2 border-black border-solid rounded-lg">
      <div className="flex p-2 bg-transparent">
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
        <VscCircleLargeFilled />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
export default BrowserContainer;
