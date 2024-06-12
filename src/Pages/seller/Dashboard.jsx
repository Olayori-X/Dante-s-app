// import { Link } from "react-router-dom";
import "../../style.css";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Heading from "../../Components/Heading";
import Card from "../../Components/Card";
import { useState, useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { TbMathGreater } from "react-icons/tb";
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Dashboard = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

    return ( 
        <div>

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
                <div className="mb-4 items-center"><Header title="Dashboard" link="/Dashboard"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Dashboard"/></div>
                </div>
                
                {/* Body */}
                {/* Card */}
                <div className=" grid lg:grid-cols-4 sm:grid-cols-1 px-8 gap-5 mb-4">
                  <Card className="bg-primary !important text-white" title="Total Revenue" icons={<TbCurrencyNaira className="size-10 text-white bg-primary p-2 rounded-full"/>} info="10M"/>
                  <Card className="bg-fa !important" title="Total Orders" icons={<RiListView className="size-10 text-white bg-blue p-2 rounded-full"/>} info="5K"/>
                  <Card title="Total Delivery" icons={<MdDeliveryDining className="size-10 text-white bg-success p-2 rounded-full"/>} info="50K"/>
                  <Card title="Total Users" icons={<FaUsers className="size-10 text-white bg-pend p-2 rounded-full"/>} info="100K"/>
                </div>

                {/* Charts */}
                <div className=" grid lg:grid-cols-3 px-8 gap-5">
                  {/* Line Chart */}
                  <div className="col-span-2 md:col-span-2 bg-white border border-disable rounded-md p-4 overflow-hidden">
                    <p className="text-md text-black text-left mb-2">Customer Order Map</p>
                  </div>
                  
                  {/* Doughnut Charts */}
                  <div className="bg-white border w-full border-disable px-3 pt-4 pb-0 rounded-md">
                    <p className="text-md text-black text-left mb-4">Order Status</p>
                  </div>
                </div><br/>
                
                {/* Recent Orders */}
                <div className="flex flex-row justify-between px-8">
                  <div className="text-primary text-xl font-semibold">Recent Orders</div>

                  <div className=" text-black2 text-md font-medium px-4">
                    <Link to="/Order" className="flex flex-row cursor-pointer gap-1 items-center">See All<TbMathGreater/></Link>
                  </div>

                </div>
                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default Dashboard;
