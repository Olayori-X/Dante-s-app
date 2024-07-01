import "../style.css";
import React, { useEffect, useState } from 'react';

const CardData =
    [
      {
        title: "John Doe",
        // icons: <TbCurrencyNaira className="size-10 text-white bg-primary p-2 rounded-full"/>,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 1
      },
  
      {
        title: "John Doe",
        // icons: <RiListView className="size-10 text-white bg-blue p-2 rounded-full"/>,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 2
      },

      {
        title: "John Doe",
        // icons: <MdDeliveryDining className="size-12 text-white bg-success p-2 rounded-full"/>,
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 3
      },

      
    ]

const Reviews = (props) => {
  // const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const BASE_URL = 'https://35b6-102-89-23-79.ngrok-free.app/api';
  // const endpoint = '/seller/dashboard/get-ratings?rating=1';

  //   useEffect(() => {
  //       const fetchRating = async () => {
  //         try {
  //           const response = await fetch(BASE_URL + endpoint, {
  //               method: 'GET',
  //               headers: {
  //                 'app-token': 'sdksd2o32usdf239djfnasojiuhrui2h3rjknweuh4ro8q2hrjwdbfoq274hrqo8e7rgsdbasdjkfnq8uerq948ri24jrdmnfau2q8h4r8oqwhrqwy8rg8oqg623ruqyhkasdjnbq3er2wurgwebsdnbq837y2egrub',
  //                 'Content-Type': 'application/json',
  //                 'origin': '*',
  //               },
  //               body: JSON.stringify({  }),
  //           });
  //           // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //           if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //           }
  //           const data = await response.json();
  //           setRating(data);
  //           // setLoading(false);
  //         } catch (error) {
  //           setError(error.message);
  //           // setLoading(false);
  //         }
  //       };
    
  //       fetchRating();
  //     }, []);

    return ( 
        <div className="">
            {/* Nav */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                {CardData.map((rate) => (
                    <div key={rate.id} className="flex flex-col bg-fa rounded-md text-black2 gap-1 p-6">
                        {/* {nav.icons} */}
                          <h1 className="text-left text-primary text-lg font-bold">{rate.title}</h1>
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
