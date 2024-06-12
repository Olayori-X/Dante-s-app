import "../style.css"
import { RxDashboard } from "react-icons/rx";
import { RiFileList3Line } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
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
        title: "Order List",
        path: "/OrderList",
        icons: <RiFileList3Line className="w-5 h-5"/>,
        id: 2
      },

      {
        title: "Staff Admins",
        path: "/StaffAdmins",
        icons: <LuUsers className="w-5 h-5"/>,
        id: 3
      },

      {
        title: "Vendors",
        path: "/Vendors",
        icons: <LuUsers className="w-5 h-5"/>,
        id: 4
      },

      {
        title: "Customers",
        path: "/Customers",
        icons: <LuUsers className="w-5 h-5"/>,
        id: 5
      },

      {
        title: "Manage Products",
        path: "/ManageProducts",
        icons: <FiBox className="w-5 h-5"/>,
        id: 6
      },

      {
        title: "Push Notification",
        path: "/PushNotification",
        icons: <RiNotification2Line className="w-5 h-5"/>,
        id: 7
      },

      {
        title: "Reviews",
        path: "/Reviews",
        icons: <FaRegStar className="w-5 h-5"/>,
        id: 8
      },

      {
        title: "Settings",
        path: "/Settings",
        icons: <SlSettings className="w-5 h-5"/>,
        id: 9
      },
    ]

 
export default SidebarData;