import "../style.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout ({ show, handleClose }) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const proceed = () => {
    setShowModal(false);
    navigate('/'); 
};

    return ( 
        <div>
          {show && (
              <div className="fixed inset-0 flex justify-center items-center z-80">
                  <div className="absolute inset-0 bg-black opacity-50 h-screen"></div>
                      <div className="relative bg-white rounded-lg max-w-lg py-8 px-4 lg:px-16 z-10 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                          <button
                          className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                          onClick={handleClose}>
                          &times;
                          </button>

                          <h2 className="text-xl text-red text-center font-semibold mb-4">Logout</h2>
                                <p className="mb-4 text-center">Are you sure you want to logout of your account?</p>
                                <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                                    <button className="bg-disable text-black2 py-3 px-16 rounded-md" onClick={handleClose}>Cancel</button>
                                    <button className="bg-red text-white py-3 px-16 rounded-md" onClick={proceed}>Logout</button>
                                </div>
                      </div>
              </div>
          )}
         
           
        </div>
     );
}
 
export default Logout;
