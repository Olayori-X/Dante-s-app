import "../style.css";
import React, { useEffect, useState } from 'react';

// const CardData =
//     [
//       {
//         title: "John Doe",
//         // icons: <TbCurrencyNaira className="size-10 text-white bg-primary p-2 rounded-full"/>,
//         review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 1
//       },
  
//       {
//         title: "John Doe",
//         // icons: <RiListView className="size-10 text-white bg-blue p-2 rounded-full"/>,
//         review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 2
//       },

//       {
//         title: "John Doe",
//         // icons: <MdDeliveryDining className="size-12 text-white bg-success p-2 rounded-full"/>,
//         review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         id: 3
//       },

      
//     ]

const Reviews = () => {
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://35b6-102-89-23-79.ngrok-free.app/api';
  const endpoint = '/seller/dashboard/get-ratings?rating=1';

    // useEffect(() => {
    //     const fetchRating = async () => {
    //       try {
    //         const response = await fetch(BASE_URL + endpoint, {
    //             method: 'GET',
    //             headers: {
    //               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMzViNi0xMDItODktMjMtNzkubmdyb2stZnJlZS5hcHAvYXBpL3NlbGxlci9zaWduLWluIiwiaWF0IjoxNzE5ODM4MzI2LCJleHAiOjE3MjI0MzAzMjYsIm5iZiI6MTcxOTgzODMyNiwianRpIjoiNUhQV09NeFFaaXlETmFYZiIsInN1YiI6IjE0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.O7WWFZ0WutsDFbjOi3-7dWHEpnc5hznRTGnjXpX-Ss4',
    //               'Content-Type': 'application/json',
    //               'origin': '*',
    //             },
    //             body: JSON.stringify({  }),
    //         });
    //         // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         setRating(data);
    //         // setLoading(false);
    //       } catch (error) {
    //         setError(error.message);
    //         // setLoading(false);
    //       }
    //     };
    
    //     fetchRating();
    //   }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(BASE_URL + endpoint, {
                        method: 'GET',
                        headers: {
                          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMzViNi0xMDItODktMjMtNzkubmdyb2stZnJlZS5hcHAvYXBpL3NlbGxlci9zaWduLWluIiwiaWF0IjoxNzE5ODQ1MTczLCJleHAiOjE3MjI0MzcxNzMsIm5iZiI6MTcxOTg0NTE3MywianRpIjoiU1M0S1c4RXJRMnl0MTRGNyIsInN1YiI6IjE0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qi_mnke2dYH_oDam-Jv0SB4UQnBZhB2VTPslrFBKanY',
                          'Content-Type': 'application/json',
                          'Accept': 'application/json',
                          'ngrok-skip-browser-warning': "69420",
                          'origin': '*',
                        },
                        // body: JSON.stringify({  }),
                    });
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
    }, []);

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
