import "../../style.css";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Heading from "../../Components/Heading";
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const ChangePassword = () => {
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
                <div className="mb-4 items-center"><Header title="Change Password" link=""/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Change Password"/></div>
                </div>
                
                {/* Body */}
                {/* Card */}
                <div className="border border-disable rounded-md px-10 py-8 mx-8">
                  
                </div>

                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default ChangePassword;
