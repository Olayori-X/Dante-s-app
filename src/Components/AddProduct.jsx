// import { Link } from "react-router-dom";
import "../style.css";
import { useState, useEffect } from 'react';
import { LiaImage } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';

function AddProduct ({ show, handleClose }) {
//   const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrorMessage] = useState({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  // const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedImage = e.dataTransfer.files[0];
    setImage(selectedImage);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

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
                      <div className="relative bg-white rounded-lg w-3/4 md:w-3/4 lg:w-3/4 py-8 px-16 z-10 max-h-screen overflow-y-auto">
                          <button
                          className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                          onClick={handleClose}>
                          &times;
                          </button>

                          {/* Form */}
                          <form  className='space-y-4'>
                                
                                {/* Category */}
                                <div className='space-y-1 md:space-y-2 items-start text-left'>
                                    <label htmlFor="title" className='text-md text-black2'>Category</label><br/>
                                    <select 
                                        className='border p-4 w-full rounded-md leading-tight border-disable bg-white focus:outline-disable text-black2' 
                                        // type='text' 
                                        id = "category" 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        // required
                                    >
                                      <option value="" disabled>Select a category</option>
                                      <option value="Fish" className="p-4">Fish</option>
                                      <option value="Meat">Meat</option>
                                      <option value="Egg">Egg</option>
                                    </select>
                                      {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}<br/>
                                </div>

                                {/* Title */}
                                <div className='space-y-1 md:space-y-2 items-start text-left'>
                                    <label htmlFor="title" className='text-md text-black2'>Product Name</label><br/>
                                    <input 
                                        className='border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2' 
                                        type='text' 
                                        id = "title" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        // required
                                        />
                                        {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}<br/>
                                </div>
        
                                {/* Body */}
                                <div className='space-y-2 text-left'>
                                    <label htmlFor="body" className='text-md text-left text-black2'>Description</label><br/>
                                    <textarea 
                                        className='border p-4 w-full h-32 rounded-md border-disable bg-white focus:outline-disable text-black2' 
                                        id = "text" 
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                    {errors.body && <span style={{ color: 'red' }}>{errors.body}</span>}<br/>
                                </div>
        
                                {/* Image */}
                                <div className='space-y-2 text-left mb-4'>
                                    <label htmlFor="image" className='text-md text-left text-black2'>Upload Image</label><br/>
                                    
                                    {image ? (
                                      <div
                                        // onMouseEnter={handleImageHover}
                                        // onMouseLeave={handleImageHoverExit}
                                        style={{ display: 'inline-block' }}
                                      >
                                        <img
                                          src={URL.createObjectURL(image)}
                                          alt="Selected Image"
                                          style={{  maxHeight: '300px', borderRadius: '6px' }}
                                          className="w-full"
                                        /><br/>
        
                                        <div className="flex flex-row gap-5 justify-items-start">
                                          {/* Option to change image */}
                                          <input
                                          type="file"
                                          accept=".jpg, .png"
                                          onChange={handleImageChange}
                                          style={{ display: 'none' }}
                                          id="imageInput"
                                          />
        
                                          <label
                                            htmlFor="imageInput"
                                            className="text-white bg-primary px-4 py-2 rounded-md cursor-pointer"
                                            onChange={handleImageChange}
                                          >
                                            Change Image
                                          </label>
        
                                          {/* Option to remove the image */}
                                          <button 
                                            className="text-black2 bg-disable px-4 py-2 rounded-md" 
                                            onClick={handleRemoveImage}
                                          >
                                          Remove Image</button>
                                        </div>
                                                                        
                                      </div>
                                    ) : (
                                    
                                      <div
                                          onDrop={handleDrop}
                                          onDragOver={handleDragOver}
                                          style={{
                                          border: '2px dashed #ccc',
                                          borderRadius: '5px',
                                          padding: '40px',
                                          textAlign: 'center',
                                          cursor: 'pointer',
                                          }}
                                      >
                                          <input
                                          type="file"
                                          accept=".jpg, .png"
                                          onChange={handleImageChange}
                                          style={{ display: 'none' }}
                                          id="imageInput"
                                          />
        
                                          <label htmlFor="imageInput" className="text-black2" style={{ cursor: 'pointer' }}>
                                            <div className="grid justify-items-center"><LiaImage className="text-c4 size-32"/></div>
                                            Drag and drop files, or <b className="text-primary">Browse</b><br/>
                                            <p className="text-xs">JPG, PNG - Max file size (10MB)</p>
                                          </label>
                                          
                                      </div>
                                    )}
                                </div>
                                
                                {/* Submit Button */}
                                <div className="grid justify-items-end">
                                  <button
                                      // onClick = {handleSubmit} 
                                      type='submit'  
                                      className=' py-4 px-24 rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-md font-bold'
                                  >Send</button>
        
                                  {/* {isOpen && (
                                      <div className="fixed inset-0 flex justify-center items-center z-80">
                                          <div className="absolute inset-0 bg-black opacity-50"></div>
                                          <div className="relative bg-white rounded-lg max-w-lg py-8 px-16 z-10">
                                              <button
                                                className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                                                onClick={closeModal}>
                                              &times;
                                              </button>
        
                                              <h2 className="text-xl text-primary text-center font-semibold mb-4">Send Notification</h2>
                                              <p className="mb-4 text-center">Do you want to send post notification?</p>
                                              
                                              <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                                                  <button className="bg-disable text-black2 py-3 px-12 rounded-md" onClick={closeModal}>No</button>
                                                  <button className="bg-primary text-white py-3 px-12 rounded-md" onClick={proceed}>Send</button>
                                              </div>
                                          </div>
                                      </div>
                                  )} */}
                                </div> 
                          </form>
                                        
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
