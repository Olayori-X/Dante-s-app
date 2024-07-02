import { useState, useEffect } from 'react';
import '../App.css';
import '../style.css';
import fisher from '../img/fisher.jpg';
import cancel from '../icons/cancel.svg';
import success from '../icons/success.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';


function Modal({ message, type, onClose }) {
  const modalClasses = `relative top-0 left-0 right-0 p-4 font-medium text-left rounded-md z-50 ${type === 'success' ? 'bg-success2 text-success' : 'bg-red2 text-red'}`;
  const iconSrc = type === 'success' ? success : cancel;
  const iconColor = type === 'success' ? 'bg-success' : 'bg-red';

  return (
    <div className={modalClasses}>
      <div className='flex flex-row gap-10'>
        <img src={iconSrc} alt="" className={`p-4 absolute left-0 top-0 rounded-md ${iconColor}`}/>        
        <div className='ml-12'>{message}</div> 
      </div>

      <button style={{ marginLeft: '470px', top: '10px', overflow: 'hidden'}} onClick={onClose} className='absolute text-black2 text-lg top-30 left-20 sm:overflow-hidden font-normal'>
          &times;</button>
    </div>
          
  );
}


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrorMessage] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [spin, setSpin] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = 'https://35b6-102-89-23-79.ngrok-free.app/api';
  const endpoint = '/seller/sign-in';

useEffect(() => {
     setErrorMessage('');
     setSuccessMessage('');
      // setEmailError('');
      // setPasswordError('');
}, []);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async () => {
      // Check if email and password are empty  
      if (email.trim() === '' && password.trim() === ''){
        setErrorMessage('Email and password are required.');
        setSuccessMessage('');
        setIsModalOpen(true);
        return;
      } else if (email.trim() === '') {
        setErrorMessage('Email is required.');
        setSuccessMessage('');
        setIsModalOpen(true);
        return;
      } else if(password.trim() === '') {
        setErrorMessage('Password is required.');
        setSuccessMessage('');
        setIsModalOpen(true);
        return;
      } 

    // Check if email is in a valid format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Email is invalid.');
      setSuccessMessage('');
      setIsModalOpen(true);
      return;
    }
    setSpin(true);
    // setErrorMessage('');
    // setSuccessMessage('');
    

    {/* Fetch Api */}
    try {
        const response = await fetch(BASE_URL + endpoint, {
          method: 'POST',
          headers: {
            'app-token': 'sdksd2o32usdf239djfnasojiuhrui2h3rjknweuh4ro8q2hrjwdbfoq274hrqo8e7rgsdbasdjkfnq8uerq948ri24jrdmnfau2q8h4r8oqwhrqwy8rg8oqg623ruqyhkasdjnbq3er2wurgwebsdnbq837y2egrub',
            'Content-Type': 'application/json',
            'origin': '*',
          },
          body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      // console.warn(data);
      // console.warn(JSON.stringify(data));
      // localStorage.setItem('auth', JSON.stringify(data.status));
      
      // console.log('API response status:', response.status);

      if (!response.ok) {
        setErrorMessage('Incorrect email or password! Please try again');
        setSuccessMessage('');
        setIsModalOpen(true);
        return;
      } else {
        setSuccessMessage('Sign-in successful.');
        setErrorMessage('')
        setIsModalOpen(true);
        // console.log(response?.data);
        // sessionStorage.getItem('data', JSON.stringify(response?.data))
      }

      setTimeout(() => {
        navigate('/Dashboard');
      }, 1000)

    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('An error occurred. Please try again.');
      // return;
    } finally {
      setSpin(false);
    }

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="grid items-center  md:py-0 md:px-0 md:block bg-fixed sm:object-cover lg:bg-contain bg-no-repeat md:bg-right" style={{ backgroundImage: `url(${fisher})`, width: '100%', height: '100vh' }} >
      <div className='grid justify-items-start'>
        <div className='py-20 px-14 space-y-4 sm:m-12 lg:m-0 items-center rounded-lg'>
          {isModalOpen && (
              <Modal
                message={errors || successMessage}
                type={errors ? 
                  'error' : 
                  'success'}
                onClose={closeModal}
                className="mb-24"
              />
            )}

          <h1 className='text-primary text-left text-4xl md:text-5xl font-black mb-0 md:mb-2'>Sign In</h1><br/>

          {/* Form */}
          <form  className='grid justify-items-stretch text-left' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className='space-y-1 md:space-y-2 items-start'>
              
              {/* Email */}
              <label htmlFor="email" className='text-md md:text-xl text-left mb-8'>Email</label><br/>
              <input 
                className='border-2 p-4 w-96 md:w-full rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                type='email' 
                id = "email" 
                placeholder='example@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}<br/><br/>
            </div>
            
            {/* Password */}
            <div className='space-y-2' style={{ position: 'relative' }}>
              <label htmlFor="pwd" className='text-md md:text-xl text-left mb-8'>Password</label><br/>
              <input 
                className='border-2 p-4 w-96 md:w-full rounded-md border-fa bg-fa focus:bg-fa focus:outline-primary' 
                type= {showPassword ? 'text' : 'password'}
                id = "pwd" 
                placeholder='Enter your password'
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
            
            {/* Submit Button */}
            {/* <input
            onClick = {handleSubmit} 
            type='submit' 
            value="Sign In"
            // disabled={loading} 
            className='w-full mt-4 py-4 px-64 rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-xl font-bold'
            />  */}
            <button type="submit" onClick = {handleSubmit} disabled={spin} className='w-96 md:w-full mt-4 py-4 px-20 md:px-64 rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-xl font-bold'>
              {spin ? <div className="px-2 text-2xl"><FaSpinner className="animate-spin" /> </div> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Image */}
      {/* <div className='grid justify-items-start bg-fixed hidden md:block bg-cover bg-center'>
        <img src={fisher} alt="fisher"/>
      </div> */}
      {/* <div className="md:block bg-cover bg-center md:bg-right" style={{ backgroundImage: `url(${fisher})`, width: '100%', height: '100vh' }} /> */}
 
    </div>
  );
}

export default Login;
