// import { Link } from "react-router-dom";
import "../../style.css";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Heading from "../../Components/Heading";
// import ManageProfile from "./ManageProfile";
import { useState, useEffect } from 'react';
import { HiUser } from "react-icons/hi2";
import { MdPayments } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import { BiShieldQuarter } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {  useMatch } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const match = useMatch('/settings/*');

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

    return ( 
        <div>
          {/* <Routes>
            <Route index path="/" />
            <Route path="profile" element={<ManageProfile />} />
            {/* <Route path="security" element={<Security />} />
            <Route path="notifications" element={<Notifications />} /> */}
          {/* </Routes> */}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row">
              {/* Sidebar */}
              <div>
                <Sidebar/>
              </div>

              {/* Header */}
              <div className="w-full">
                <div className="mb-4 items-center"><Header title="Settings" link="/settings"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Settings"/></div>
                </div>
                
                {/* Body */}               
               <div className="border border-disable rounded-md px-4 lg:px-8 py-8 mx-8">
                <div className="gap-5 flex flex-col">
                    {/* Manage Profile */}
                    
                    <Link to="profile" className="flex flex-row justify-between bg-fa p-8 rounded-md cursor-pointer">
                        <div className="flex flex-row md:flex-row items-center text-md gap-2 text-black2">
                            <HiUser className="text-white font-xl size-10 bg-primary p-2 rounded-full"/>
                            <p className="text-black2 font-medium">Manage Profile</p>
                        </div>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </Link>

                    {/* Payment Details */}
                    <Link to="payment" className="flex flex-row justify-between bg-fa p-8 rounded-md cursor-pointer">
                        <div className="flex flex-row items-center text-md gap-2 text-black2">
                            <MdPayments className="text-white font-xl size-10 bg-primary p-2 rounded-full"/>
                            <p className="text-black2 font-medium">Payment Details</p>
                        </div>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </Link>

                    {/* Change Password */}
                    <Link to="changepassword" className="flex flex-row justify-between bg-fa p-8 rounded-md cursor-pointer">
                        <div className="flex flex-row items-center text-md gap-2 text-black2">
                            <BiShieldQuarter className="text-white font-xl size-10 bg-primary p-2 rounded-full"/>
                            <p className="text-black2 font-medium">Change Password</p>
                        </div>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </Link>

                    {/* Delete Account */}
                    <div className="flex flex-row justify-between bg-fa p-8 rounded-md cursor-pointer">
                        <div className="flex flex-row items-center text-md gap-2 text-black2">
                            <RiDeleteBin5Fill className="text-white font-xl size-10 bg-primary p-2 rounded-full"/>
                            <p className="text-black2 font-medium">Delete Account</p>
                        </div>

                        <div className="flex flex-row items-center sm:ml-96 gap-3">
                            <RxCaretRight className="text-black2 font-medium cursor-pointer size-5"/>
                        </div>
                    </div>
                </div>  

                </div>
                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default Settings;
