// import { Link } from "react-router-dom";
import "../style.css";
import { useState, useEffect } from 'react';
import { LiaImage } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "../Components/Modal";
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
// import Skeleton from 'react-loading-skeleton';

function AddProduct ({ show, handleClose }) {
//   const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [image, setImage] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrorMessage] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [spin, setSpin] = useState(null);


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

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    // handleSubmit(formData);
    // handleClose();
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrorMessage(''); // Clear error when the user starts typing
  // };

  const handleSubmit = async () => {
    if (!category && !title && !body && !image && !price && !sale ) {
      setErrorMessage('All fields are required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    }

    if (!category || !title || !body || !image || !price || !sale) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    }

    if (!category) {
      setErrorMessage('Select a category.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if (!title) {
      setErrorMessage('Product Name is required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if (!body) {
      setErrorMessage('Description is required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if (!image) {
      setErrorMessage('Image is required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if (!price) {
      setErrorMessage('Please enter price.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if (!sale) {
      setErrorMessage('Enter number of products available for sale.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    }

    
  
  setSpin(true);
  }

  // const proceed = () => {
  //   // setIsOpen(false);
  //   setSuccessMessage('A new product has been added');
  //   setTitle('');
  //   setBody('');
  //   setImage('');
  //   setPrice('');
  //   setSale('');
  //   // setIsModalOpen(true);
  //   return; 
  // };

    // if (show) return null;

    return ( 
        <div>
          {show && (
              <div className="fixed inset-0 flex justify-center items-center z-80">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                      <div className="relative bg-white rounded-lg w-3/4 md:w-3/4 lg:w-3/4 py-8 px-4 lg:px-16 z-10 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                          <button
                          className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                          onClick={handleClose}>
                          &times;
                          </button>

                          {/* Modal */}
                          <div className=" mb-4">
                            {isModalOpen && (
                              <Modal
                                message={errors || successMessage}
                                type={errors ? 
                                  'error' : 
                                  'success'}
                                onClose={closeModal}
                                className=""
                              />
                            )}
                          </div>

                          {/* Form */}
                          <form onSubmit={onSubmit} className='space-y-4'>
                                
                                {/* Category */}
                                <div className='space-y-1 md:space-y-2 items-start text-left relative mb-2'>
                                    <label htmlFor="category" className='text-md text-black2'>Category</label><br/>
                                    <select 
                                        className='block appearance-none border border-disable rounded-md w-full px-4 py-6 text-black2 leading-tight focus:outline-disable bg-white' 
                                        // type='text' 
                                        id = "category" 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        // required
                                    >
                                      <option value="" disabled>Select a category</option>
                                      <option value="Fish" className="p-4">Fish</option>
                                      <option value="Meat" className="p-4">Meat</option>
                                      <option value="Egg" className="p-4">Egg</option>
                                    </select>

                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black2">
                                      <RiArrowDropDownLine className="h-6 w-6"/>
                                    </div>
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

                                {/* Price */}
                                <div className='space-y-2 text-left'>
                                    <label htmlFor="body" className='text-md text-left text-black2'>Price</label><br/>
                                    <input 
                                        className='border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black' 
                                        type='text' 
                                        id = "price" 
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="N"
                                        // required
                                    />
                                    {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}<br/>
                                </div>

                                {/* Sale */}
                                <div className='space-y-2 text-left'>
                                    <label htmlFor="body" className='text-md text-left text-black2'>Available for sale</label><br/>
                                    <input 
                                        className='border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2' 
                                        type='text' 
                                        id = "sale" 
                                        value={sale}
                                        onChange={(e) => setSale(e.target.value)}
                                        // required
                                    />
                                    {errors.sale && <span style={{ color: 'red' }}>{errors.sale}</span>}<br/>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="grid justify-items-end">
                                <button type="submit" onClick = {handleSubmit} disabled={spin} className='mt-4 w-full md:w-64 py-4 px-20  rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-md font-medium'>
                                  {spin ? <div className="px-2 text-md"><FaSpinner className="animate-spin" /> </div> : 'Add'}
                                </button>
                                </div> 
                          </form>
                  </div>
              </div>
          )}
         
           
        </div>
     );
}
 
export default AddProduct;
