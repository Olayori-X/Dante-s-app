import "../style.css";
import "../index.css";
import { useState } from 'react';
import SidebarData from "../Components/SidebarData";
import { NavLink } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
// import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdClose} from "react-icons/md";
import Logout from "../Components/Logout";


const Sidebar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [side, setSide] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(false);

    const openModal = () => {
        setShowModal(true);
        // setSide(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleNavbar = () => {
        setSide(!side);
    }

    const proceed = () => {
        setShowModal(false);
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
                    <div className="hidden lg:flex lg:flex-col sticky h-screen left-0 w-60 text-left border-r border-disable p-4 bg-white md:show">
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
                        <Logout show={showModal} handleClose={closeModal}/>
                    
                    </div>  
                    
                    {/* Side Toggle */}
                    <div className="lg:hidden">    
                            <button onClick={()=>toggleNavbar(true)} className="">{side ? <MdClose className="text-black bg-disable p-2 size-8 rounded-full absolute top-15 right-20 cursor-pointer"/> : <GiHamburgerMenu className="text-primary font-black absolute top-6 size-5 mr-4 left-4"/>}</button>
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
                                    <Logout show={showModal} handleClose={closeModal}/>
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