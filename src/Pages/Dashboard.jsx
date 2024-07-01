// import { Link } from "react-router-dom";
import "../style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
import Card from "../Components/Card";
import Reviews from "../Components/Reviews";
import { useState, useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
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
                <div className="mb-4 items-center"><Header title="Dashboard" link="/dashboard"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Dashboard"/></div>
                </div>
                
                {/* Body */}
                {/* Card */}
                <div className=" grid lg:grid-cols-3 sm:grid-cols-1 px-8 gap-5 mb-4">
                  <Card className="bg-primary text-white" title="Total Revenue" icons={<TbCurrencyNaira className="size-10 text-white bg-[#fefefe] p-2 rounded-full"/>} info="10M"/>
                  <Card title="Total Products" icons={<FiBox className="size-10 text-white bg-blue p-2 rounded-full"/>} info="5K"/>
                  <Card title="Total Orders" icons={<RiListView className="size-10 text-white bg-pend p-2 rounded-full"/>} info="5K"/>
                </div>
                
                {/* Reviews */}
                <div className="px-8 items-left">
                  <div className="text-primary text-left text-xl font-semibold mb-2">Reviews</div>
                    <Reviews/>

                  {/* <div className=" text-black2 text-md font-medium px-4">
                    <Link to="/Order" className="flex flex-row cursor-pointer gap-1 items-center">See All<TbMathGreater/></Link>
                  </div> */}

                </div>
                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default Dashboard;
