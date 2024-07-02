import "../style.css";
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Components/AuthContext';


const Reviews = () => {
  const { authToken, setStatusCode } = useAuth();
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://35b6-102-89-23-79.ngrok-free.app/api';
  const endpoint = '/seller/dashboard/get-ratings?rating=1';

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(BASE_URL + endpoint, {
              method: 'GET',
              headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'ngrok-skip-browser-warning': "69420",
              'origin': '*',
              },
          });

          setStatusCode(response.status);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          if (result.status) {
            setRating(result.data);
          } else {
            throw new Error('Data fetch unsuccessful');
          }
          // setLoading(false);
        } catch (error) {
          setError(error.message);
          // setLoading(false);
        }
      };
  
      fetchData();
    }, [authToken, setStatusCode]);

    return ( 
        <div className="">
            {/* Nav */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                {rating.map((rate) => (
                    <div key={rate.id} className="flex flex-col bg-fa rounded-md text-black2 gap-1 p-6">
                          {rate.rating}
                          <h1 className="text-left text-primary text-lg font-bold">{rate.user.fullname}</h1>
                          <h1 className="text-sm text-left text-black2">{rate.review}</h1>
                    </div> 
                ))}
            </div><br/>
                
                    {/* <div className="flex flex-col bg-fa rounded-md gap-1 pl-6 pr-20 py-6">
                          <div>{props.icons}</div>
                          <h1 className="text-left">{props.title}</h1>
                          <h1 className="text-2xl text-left text-black2 font-medium">{props.info}</h1>
                    </div>  */}

        </div>
     );
}
 
export default Reviews;
