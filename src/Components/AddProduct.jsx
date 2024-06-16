// import { Link } from "react-router-dom";
import "../style.css";
import { useState, useEffect } from 'react';
import { LiaImage } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';

function AddProduct ({ show, handleClose }) {
//   const [loading, setLoading] = useState(false);
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
//   const [errors, setErrorMessage] = useState({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
  // const [isHovered, setIsHovered] = useState(false);

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const selectedImage = e.dataTransfer.files[0];
  //   setImage(selectedImage);
  // };

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const handleRemoveImage = () => {
  //   setImage(null);
  // };

  // const removeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const openModal = (e) => {
  //   e.preventDefault();

  //   // Validate the form inputs
  //   if (!title || !body) {
  //   //   setErrorMessage('Both title and body are required.');
  //     // setSuccessMessage('');
  //     setIsModalOpen(true);
  //     return;
  //   } 

  //   // setErrorMessage('');
  //   // setSuccessMessage('');
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const proceed = () => {
  //   setIsOpen(false);
  //   // setSuccessMessage('Notification sent successfully');
  //   // setTitle('');
  //   // setBody('');
  //   // setImage('');
  //   // setIsModalOpen(true);
  //   return; 
  // };

    // if (show) return null;

    return ( 
        <div>
        {show && (
            <div className="fixed inset-0 flex justify-center items-center z-80">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative bg-white rounded-lg max-w-lg py-8 px-16 z-10">
                        <button
                         className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                         onClick={handleClose}>
                         &times;
                        </button>

                        <h2 className="text-xl text-primary text-center font-semibold mb-4">Send Notification</h2>
                        <p className="mb-4 text-center">Do you want to send post notification?</p>
                                      
                        <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                            {/* <button className="bg-primary text-white py-3 px-12 rounded-md" onClick={proceed}>Add</button> */}
                        </div>
                </div>
            </div>
        )}
         
           
        </div>
     );
}
 
export default AddProduct;
