import { VscCircleLargeFilled } from 'react-icons/vsc';

function BrowserContainer({children}) {
  return (
    <div className="w-full border-2 rounded-lg border-solid border-black">
      <div className="bg-transparent p-2 flex">
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