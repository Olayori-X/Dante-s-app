// // import { Link } from "react-router-dom";
import "../style.css";
import { useState, useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaEllipsisV } from 'react-icons/fa';
import { SlSocialDropbox } from 'react-icons/sl';
import { FaPlus } from "react-icons/fa6";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
import AddProduct from "../Components/AddProduct";
// import DataTable from 'react-data-table-component';
// import axios from 'axios';


function Product () {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [dropdownRowId, setDropdownRowId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [error, setError] = useState(false);

    // const openModal = () => {
  
    //   // Validate the form inputs
    //   // if (!title || !body) {
    //   //   setErrorMessage('Both title and body are required.');
    //     // setSuccessMessage('');
    //   //   setIsModalOpen(true);
    //   //   return;
    //   // } 
  
    //   // setErrorMessage('');
    //   // setSuccessMessage('');
    //   setIsOpen(true);
    // };

    const openModal = () => {
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };
  
    const url1 = 'https://35b6-102-89-23-79.ngrok-free.app/api/product/create';
    const url2 = 'https://35b6-102-89-23-79.ngrok-free.app/api/product/category/3';
  

    useEffect(() => {
      const fetchData = async () => {        
        try {
          const headers = {
            'origin': '*',
            "Content-Type": "application/json",
            'app-token': 'sdksd2o32usdf239djfnasojiuhrui2h3rjknweuh4ro8q2hrjwdbfoq274hrqo8e7rgsdbasdjkfnq8uerq948ri24jrdmnfau2q8h4r8oqwhrqwy8rg8oqg623ruqyhkasdjnbq3er2wurgwebsdnbq837y2egrub',
          };

          const [response1, response2] = await Promise.all([
            fetch(url1, {
              method: 'GET',
              headers,
            }),

            fetch(url2, {
              method: 'GET',
              headers,
            }),
          ])
          // const result = await response.json();
          const result1 = await response1.json();
          const result2 = await response2.json();

          if (result1.status && result2.status) {
            const combinedData = [result1.data, ...result2.data];
            setData(combinedData);
            setFilteredData(combinedData);
          } else {
            console.error('Error fetching data:', result1.msg || result2.msg);
          }
          // setData(result);
          // setFilteredData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const handleAction = (action, id) => {
        // Handle different actions here
        console.log(`${action} action on row with ID: ${id}`);
        setDropdownRowId(null);
      };
    
      const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
        const filteredItems = data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filteredItems);
        setCurrentPage(1);
      };
    
      const toggleDropdown = (id) => {
        setDropdownRowId(dropdownRowId === id ? null : id);
      };

      const indexOfLastRow = currentPage * rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - rowsPerPage;
      const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
                <div className="mb-4 items-center"><Header title="Products" link="/Product"/></div>
                
                <div className="flex md:flex-row flex-col justify-between items-left md:items-center px-8">
                  <div className="mb-4 text-left"><Heading title="Products"/></div>
                  <div className="flex flex-row gap-3 items-center">
                      
                      {/* Search */}
                      <div className="">
                            <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearch}
                            className="w-full px-3 py-3 border rounded text-black2 focus:outline-disable"
                            />
                      </div>

                      {/* Add Product */}
                      <div>
                        <button onClick={openModal} className="flex flex-row gap-1 items-center p-4 bg-primary text-white text-sm rounded-md"><FaPlus/>Add Product</button>
                        <AddProduct show={showModal} handleClose={closeModal}/>
                        {/* {isOpen && (
                              // <div className="fixed inset-0 flex justify-center items-center z-80">
                              //     <div className="absolute inset-0 bg-black opacity-50"></div>
                              //     <div className="relative bg-white rounded-lg max-w-lg py-8 px-16 z-10">
                              //         <button
                              //           className="absolute top-0 right-0 m-4 bg-disable rounded-full text-gray-600 text-2xl hover:text-gray-800 w-10 h-10"
                              //           onClick={closeModal}>
                              //         &times;
                              //         </button>

                              //         <h2 className="text-xl text-primary text-center font-semibold mb-4">Send Notification</h2>
                              //         <p className="mb-4 text-center">Do you want to send post notification?</p>
                                      
                              //         <div className=" flex flex-row justify-items-stretch gap-4 mr-2">
                              //             <button className="bg-disable text-black2 py-3 px-12 rounded-md" onClick={closeModal}>No</button>
                              //             <button className="bg-primary text-white py-3 px-12 rounded-md" onClick={proceed}>Send</button>
                              //         </div>
                              //     </div>
                              // </div>
                          )} */}
                      </div>
                  </div> 
                </div>
                
                {/* Body */}
                {empty ? (
                  <div className="flex flex-col items-center justify-center h-64">
                    <SlSocialDropbox className="text-9xl text-c4"/>
                    <div className="mt-2 text-lg text-black3">No product has been added</div>
                  </div>
                ) : error || filteredData.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64">
                    <SlSocialDropbox className="text-9xl text-c4" />
                    <div className="mt-2 text-lg text-black3">No product has been added</div>
                  </div>
                ) : (
                  <div className="text-left px-8 gap-5">
                    <table className="min-w-full border-collapse border border-disable">
                          <thead className="bg-fa text-sm">
                          <tr className="">
                              <div className="p-2 text-center items-center"><th className="p-4 text-black2 font-normal">ID</th></div>
                              <th className="p-4 text-black2 font-normal">Product</th>
                              <th className="p-4 text-black2 font-normal">Available</th>
                              <th className="p-4 text-black2 font-normal">Price</th>
                              <th className="p-4 text-black2 font-normal">Date Added</th>
                              <th className="p-4 text-black2 font-normal">Action</th>
                          </tr>
                          </thead>

                          <tbody>
                          {currentRows.map((item) => (
                              <tr key={item.id} className="text-black2 text-sm border-b border-disable">
                                  <div className="bg-white p-4 text-center text-sm items-center"><td className="bg-fa px-4 py-2 rounded-sm">{item.id}</td></div>
                                  <td className="p-4">{item.name}</td>
                                  {/* <td className="p-4">{item.state}</td> */}
                                  <td className="p-4">{item.price}</td>
                                  <td className="p-4">June, 2024</td>
                                  <td className="flex flex-row gap-2 p-2 items-center">
                                    <div className="relative">
                                      <button onClick={() => toggleDropdown(item.id)} className="focus:outline-none">
                                        <FaEllipsisV />
                                      </button>
                                      {dropdownRowId === item.id && (
                                        <div className="absolute right-0 z-10 w-40 py-2 mt-2 bg-white rounded shadow-xl">
                                          <button
                                            onClick={() => handleAction('Accept', item.id)}
                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200"
                                          >
                                            Accept
                                          </button>
                                          <button
                                            onClick={() => handleAction('Decline', item.id)}
                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200"
                                          >
                                            Decline
                                          </button>
                                          <button
                                            onClick={() => handleAction('Ban', item.id)}
                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200"
                                          >
                                            Ban
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                      {/* <FaEye className="text-c4 size-5 cursor-pointer" onClick={() => openDetailsModal(item)}/>
                                      <HiOutlineTrash className="text-red size-5 cursor-pointer" onClick={() => openModal(item.id)}/> */}
                                  </td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      
                      {!loading && !error && filteredData.length > 0 && (
                        <div className="mt-4">
                          <Pagination
                            rowsPerPage={rowsPerPage}
                            totalRows={filteredData.length}
                            paginate={paginate}
                            currentPage={currentPage}
                          />    
                        </div>
                      )}                          
                  </div>
                )}
                
              </div>

            </div>
          )}                    
        </div>
     );
};

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-300 hover:bg-gray-200`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 
export default Product;
