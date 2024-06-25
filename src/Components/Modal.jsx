import "../style.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cancel from '../icons/cancel.svg';
import success from '../icons/success.svg';

function Modal ({ message, type, onClose }) {
    const modalClasses = `relative top-0 left-0 right-0 p-4 font-medium text-left rounded-md z-50 ${type === 'success' ? 'bg-success2 text-success' : 'bg-red2 text-red'}`;
    const iconSrc = type === 'success' ? success : cancel;
    const iconColor = type === 'success' ? 'bg-success' : 'bg-red';

  return (
    <div className={modalClasses}>
      <div className='flex flex-row gap-10'>
        <img src={iconSrc} alt="" className={`p-4 absolute left-0 top-0 rounded-md ${iconColor}`}/>        
        <div className='ml-12'>{message}</div> 
      </div>

      <button style={{ marginLeft: '470px', top: '10px', overflow: 'hidden'}} onClick={onClose} className='absolute text-black2 text-lg top-30 right-4 sm:overflow-hidden font-normal'>
          &times;</button>
    </div>
          
  );
}
 
export default Modal;
