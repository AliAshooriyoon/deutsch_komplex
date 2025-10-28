import { TiArrowSortedDown } from "react-icons/ti";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
const DashboardPhone = () => {
  return <>
    <div className="dashboardPhone w-full h-full">
      <div className="header_list flex items-center h-full flex-row w-full px-4 justify-between">
        <div className="h-full flex items-center flex-col justify-center">
          <FaPenAlt className="w-10 h-10" />
        </div>
        <div className="h-full flex items-center flex-col justify-center">
          <FaBookReader className="w-10 h-10" />
        </div>
        <div className="h-full flex items-center flex-col justify-center">
          <VscSymbolKeyword className="w-10 h-10" />
        </div>
        <div className="h-full flex items-center flex-col justify-center">
          <FaHeadphones className="w-10 h-10" />
        </div>
        <div className="h-full flex items-center flex-col justify-center">
          <MdOutlineSettings className="w-10 h-10" />
        </div>
      </div>
    </div>
  </>
}
export default DashboardPhone;
