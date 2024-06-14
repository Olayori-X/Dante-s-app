import "../style.css"
import { RxDashboard } from "react-icons/rx";
import { RiFileList3Line } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";


const SidebarData =
    [
      {
        title: "Dashboard",
        path: "/Dashboard",
        icons: <RxDashboard className="w-5 h-5"/>,
        id: 1
      },

      {
        title: "Product",
        path: "/Product",
        icons: <FiBox className="w-5 h-5"/>,
        id: 2
      },
  
      {
        title: "Order",
        path: "/Order",
        icons: <RiFileList3Line className="w-5 h-5"/>,
        id: 3
      },

      {
        title: "Settings",
        path: "/Settings",
        icons: <SlSettings className="w-5 h-5"/>,
        id: 4
      },
    ]

 
export default SidebarData;