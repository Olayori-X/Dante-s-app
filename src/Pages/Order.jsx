import "../style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
import { useState, useEffect } from 'react';
import { RiFileList3Line } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [empty, setEmpty] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
                <div className="mb-4 items-center"><Header title="Orders" link="/order"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Orders"/></div>
                </div>
                
                {/* Body */}
                <div className="border border-white md:border-disable rounded-md px-0 md:px-10 py-2  md:py-6 mx-8">
                    <div className="flex flex-row justify-between space-x-2 border-b-2 border-disable bg-white rounded-md">
                      {/* Tabs */}
                      <button
                        onClick={() => handleTabClick('tab1')}
                        className={`py-4 px-12 md:px-44 focus:outline-none ${activeTab === 'tab1' ? 'bg-primary text-white rounded-md' : 'text-gray-500'}`}
                      >
                        Open Orders
                      </button>

                      <button
                        onClick={() => handleTabClick('tab2')}
                        className={`py-4 px-12 md:px-44 focus:outline-none ${activeTab === 'tab2' ? 'bg-primary text-white rounded-md' : 'text-gray-500'}`}
                      >
                        Closed Orders
                      </button>
                    </div>

                    <div className="p-4">
                      {/* OPen Orders */}
                      {activeTab === 'tab1' && 
                        <div className="flex flex-col items-center justify-center h-64">
                          <RiFileList3Line className="text-9xl text-c4"/>
                           <p className="text-lg text-black2">No Orders Yet</p>
                           <p className="text-sm text-black2">Order from buyers will appear here</p>
                        </div>
                      }
                      
                      {/* Closed Orders */}
                      {activeTab === 'tab2' && 
                        <div className="flex flex-col items-center justify-center h-64">
                          <RiFileList3Line className="text-9xl text-c4"/>
                          <p className="text-lg text-black2">No Orders Yet</p>
                          <p className="text-sm text-black2">Order from buyers will appear here</p>
                        </div>
                      }
                    </div>
                </div>

                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default Order;
