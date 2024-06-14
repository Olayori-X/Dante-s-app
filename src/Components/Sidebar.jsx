import "../style.css";
import "../index.css";
import { useState } from 'react';
import SidebarData from "../Components/SidebarData";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
// import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdClose} from "react-icons/md";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [side, setSide] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const toggleNavbar = () => {
        setSide(!side);
    }

    const proceed = () => {
        setIsOpen(false);
        navigate('/'); 
    };

    return ( 
        <>
            <div className="" >
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                </div>
            )}
                <div>
                    <div className="hidden md:flex md:flex-col sticky h-full left-0 w-60 text-left border-r border-disable p-4 bg-white md:show">
                        <div className="flex flex-col justify-items-start mb-4 pl-2">                
                        <h1 className="mb-4 mt-4 font-extrabold text-primary text-2xl">Market Access</h1>
                        </div>
                        
                        {/* Nav */}
                        <div className="flex justify-between flex-col md:flex-col lg:flex-col space-y-1">
                            {SidebarData.map((nav) => (
                                <NavLink to={nav.path} key={nav.id} className="flex flex-row items-center gap-2 text-sm text-black2 hover:text-black2 hover:bg-disable font-normal  hover:rounded-md hover:border-primary pl-4 pr-10 py-4">
                                     {nav.icons}
                                    <NavLink to={nav.path} className="nav">{nav.title}</NavLink>
                                    {/* {nav.title || <Skeleton/>} */}
                                </NavLink> 
                            ))}
                        </div><br/>

                        {/* Logout */}   
                        <button type="submit" onClick={openModal} className="flex flex-row justify-items-center mb-4 pl-4 py-4 gap-3 cursor-pointer text-sm text-black2 hover:text-black2 hover:bg-disable font-normal  hover:rounded-md hover:border-primary">
                            <TbLogout className="h-5 w-5"/>
                            <p >Logout</p>
                        </button>
                        
                        
                        
                        {/* Logout Modal */}
                        {isOpen && (
                            <div className="fixed inset-0 flex justify-center items-center z-80">
                                <div className="absolute inset-0 bg-black opacity-50 h-screen"></div>
                                <div className="relative bg-white rounded-lg max-w-lg py-8 px-10 z-10">
                                    <button
                                    className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                                    onClick={closeModal}
                                    >
                                    &times;
                                    </button>

                                    <h2 className="text-xl text-red text-center font-semibold mb-4">Logout</h2>
                                    <p className="mb-4 text-center">Are you sure you want to logout of your account?</p>
                                    
                                    <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                                        <button className="bg-disable text-black2 py-3 px-16 rounded-md" onClick={closeModal}>Cancel</button>
                                        <button className="bg-red text-white py-3 px-16 rounded-md" onClick={proceed}>Logout</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    
                    </div>  
                    
                    {/* Side Toggle */}
                    <div className="md:hidden">    
                            <button onClick={()=>toggleNavbar(true)} className="">{side ? <MdClose className="text-black bg-disable p-2 size-8 rounded-full absolute top-15 right-20 cursor-pointer"/> : <GiHamburgerMenu className="text-primary font-black absolute top-6 size-5 mr-4 left-2"/>}</button>
                            {side &&(
                            <div className="sticky h-full w-screen left-0 top-0 -translate-x-0 transition-all px-4">
                                <div className="flex bg-white flex-col right-0 top-0 p-2 gap-5 z-[100] w-56 ">
                                    <div className="flex flex-col justify-items-start pl-2">                
                                        <h1 className="font-extrabold text-left text-primary text-2xl">Market Access</h1>
                                    </div>
                                
                                    {/* Nav */}
                                    <div className="flex justify-between flex-col space-y-1">
                                        {SidebarData.map((nav) => (
                                            <NavLink to={nav.path} key={nav.id} className="flex flex-row items-center gap-2 text-sm text-black2 hover:text-black2 hover:bg-disable font-normal  hover:rounded-md hover:border-primary pl-4 pr-10 py-4">
                                                 {nav.icons}
                                                <NavLink to={nav.path} className="nav">{nav.title}</NavLink>
                                                 {/* {nav.title || <Skeleton/>} */}
                                            </NavLink> 
                                        ))}
                                    </div><br/>
            
                                    {/* Logout */}   
                                    <button type="submit" onClick={openModal} className="flex flex-row justify-items-center mb-4 pl-4 py-4 gap-3 cursor-pointer text-sm text-black2 hover:text-black2 hover:bg-disable font-normal  hover:rounded-md hover:border-primary">
                                        <TbLogout className="h-5 w-5"/>
                                        <p>Logout</p>
                                    </button>

                                    {/* Logout Modal */}
                                    {isOpen && (
                                        <div className="fixed inset-0 flex justify-center items-center z-80">
                                            <div className="absolute inset-0 bg-black opacity-50 h-full"></div>
                                            <div className="relative bg-white rounded-lg max-w-lg py-8 px-10 z-10">
                                                <button
                                                className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-xl hover:text-gray-800 w-10 h-10"
                                                onClick={closeModal}
                                                >
                                                &times;
                                                </button>

                                                <h2 className="text-lg text-red text-center font-semibold mb-2">Logout</h2>
                                                <p className="mb-4 text-sm text-center">Are you sure you want to logout of your account?</p>
                                                
                                                <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                                                    <button className="bg-disable text-sm text-black2 py-3 px-12 rounded-md" onClick={closeModal}>Cancel</button>
                                                    <button className="bg-red text-sm text-white py-3 px-12 rounded-md" onClick={proceed}>Logout</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        
                        )}      
                    </div>                  
                </div>
            </div>
        </>
     );
}
 
export default Sidebar;