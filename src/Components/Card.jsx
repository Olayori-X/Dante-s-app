import "../style.css";
// import { FaUsers } from "react-icons/fa";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { MdDeliveryDining } from "react-icons/md";
// import { RiListView } from "react-icons/ri";

// const CardData =
//     [
//       {
//         title: "Total Revenue",
//         icons: <TbCurrencyNaira className="size-10 text-white bg-primary p-2 rounded-full"/>,
//         info: "10M",
//         id: 1
//       },
  
//       {
//         title: "Total Orders",
//         icons: <RiListView className="size-10 text-white bg-blue p-2 rounded-full"/>,
//         info: "5K",
//         id: 2
//       },

//       {
//         title: "Total Delivery",
//         icons: <MdDeliveryDining className="size-12 text-white bg-success p-2 rounded-full"/>,
//         info: "50K",
//         id: 3
//       },

//       {
//         title: "Total Users",
//         icons: <FaUsers className="size-10 text-white bg-pend p-2 rounded-full"/>,
//         info: "100K",
//         id: 4
//       },
//     ]

const Header = (props) => {
    return ( 
        <div className="">
            {/* Nav */}
            {/* <div className="grid grid-cols-4 gap-5 items-center">
                {CardData.map((nav) => (
                    <div key={nav.id} className="flex flex-col bg-fa rounded-md text-black2 gap-1 pl-6 pr-20 py-6">
                        {nav.icons}
                          <h1 className="text-left">{nav.title}</h1>
                          <h1 className="text-2xl text-left text-black2 font-medium">{nav.info}</h1>
                    </div> 
                ))}
            </div><br/> */}
                
                    <div className="flex flex-col bg-fa rounded-md gap-1 pl-6 pr-20 py-6">
                          <div>{props.icons}</div>
                          <h1 className="text-left">{props.title}</h1>
                          <h1 className="text-2xl text-left text-black2 font-medium">{props.info}</h1>
                    </div> 

        </div>
     );
}
 
export default Header;
