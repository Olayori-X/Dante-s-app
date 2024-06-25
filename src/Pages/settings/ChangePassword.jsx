import "../../style.css";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Heading from "../../Components/Heading";
import Modal from "../../Components/Modal";
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [errors, setErrorMessage] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [spin, setSpin] = useState(null);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowNewPassword(!showNewPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowRePassword(!showRePassword);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    // Check if password fields are empty  
    if (password.trim() === ''){
      setErrorMessage('Password is required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } 
    else if (newpassword.trim() === '') {
      setErrorMessage('New Password is required.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } else if(repassword.trim() === '') {
      setErrorMessage('Please re-enter password.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    } 
  
  setSpin(true);
  }

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
                <div className="border border-disable rounded-md px-4 md:px-10 py-8 mx-8">
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
                  <form  className='grid justify-items-stretch text-left' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div className='space-y-1 md:space-y-2 items-start'>

                    </div>
                    
                    {/* Old Password */}
                    <div className='space-y-2' style={{ position: 'relative' }}>
                      <label htmlFor="pwd" className='text-md md:text-md text-left mb-8'>Enter Old Password</label><br/>
                      <input 
                        className='border p-6 w-96 md:w-full rounded-md border-fa bg-white focus:bg-white focus:outline-fa' 
                        type= {showPassword ? 'text' : 'password'}
                        id = "pwd" 
                        placeholder='Enter old password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        {/* Eye icon switch */}
                        {showPassword ? (
                          <FaEye
                            onClick={togglePasswordVisibility}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={togglePasswordVisibility}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        )}
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br/>
                    </div><br/>

                    {/* New Password */}
                    <div className='space-y-2' style={{ position: 'relative' }}>
                      <label htmlFor="pwd" className='text-md md:text-md text-left mb-8'>Enter New Password</label><br/>
                      <input 
                        className='border p-6 w-96 md:w-full rounded-md border-fa bg-white focus:bg-white focus:outline-fa' 
                        type= {showNewPassword ? 'text' : 'password'}
                        id = "pwd" 
                        placeholder='Enter new password'
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        />
                        
                        {/* Eye icon switch */}
                        {showNewPassword ? (
                          <FaEye
                            onClick={togglePasswordVisibility1}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={togglePasswordVisibility1}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        )}
                        {errors.newpassword && <span style={{ color: 'red' }}>{errors.newpassword}</span>}<br/>
                    </div><br/>

                    {/* Re-enter Password */}
                    <div className='space-y-2' style={{ position: 'relative' }}>
                      <label htmlFor="pwd" className='text-md md:text-md text-left mb-8'>Re-Enter New Password</label><br/>
                      <input 
                        className='border p-6 w-96 md:w-full rounded-md border-fa bg-white focus:bg-white focus:outline-fa' 
                        type= {showRePassword ? 'text' : 'password'}
                        id = "pwd" 
                        placeholder='Re-enter new password'
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        />
                        
                        {/* Eye icon switch */}
                        {showNewPassword ? (
                          <FaEye
                            onClick={togglePasswordVisibility2}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        ) : (
                          <FaEyeSlash
                            onClick={togglePasswordVisibility2}
                            size={20}
                            style={{
                              position: 'absolute',
                              top: '60%',
                              right: '30px', 
                              transform: 'translateY(-50%)', 
                              cursor: 'pointer', 
                              color: '#c4c4c4', 
                            }}
                          />
                        )}
                        {errors.repassword && <span style={{ color: 'red' }}>{errors.repassword}</span>}<br/>
                    </div><br/>

                    <div className="grid justify-items-end">    
                      <button type="submit" onClick = {handleSubmit} disabled={spin} className='mt-4 py-4 px-20  rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-md font-medium'>
                        {spin ? <div className="px-2 text-md"><FaSpinner className="animate-spin" /> </div> : 'Save'}
                      </button>
                    </div>
                  </form>
                </div>

                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default ChangePassword;
