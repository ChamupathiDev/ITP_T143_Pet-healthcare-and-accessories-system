import React, { useEffect, useState, useRef } from 'react';
import Nav from "../Nav/Nav";
import Sidebar from '../Sidebar/Sidebar';
import axios from "axios";
import Delivery from "../Delivery/Delivery";
import { useReactToPrint } from "react-to-print";
import { Link } from 'react-router-dom'; // Import Link component from React Router

const URL = "http://localhost:5000/delivery";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function DeliveryDetails() {
    const [delivery, setDeliveryDetails] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setDeliveryDetails(data.delivery));
    }, []);

    const ComponentsRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Delivery Report",
        onAfterPrint: () => alert("Successfully downloaded")
    });

    const [searchQuery, setSearchQuery] = useState(''); // Initialize with an empty string
    const [noResult, setNoResults] = useState(false);

    const handleSearch = () => {
        fetchHandler().then((data) => {
            const filteredDeliveryDetails = data.delivery.filter((delivery) =>
                Object.values(delivery).some((field) =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setDeliveryDetails(filteredDeliveryDetails);
            setNoResults(filteredDeliveryDetails.length === 0);
        });
    };

    return (
       
            
            <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section className="pl-60 pt-20 overflow-x-auto">
      <div className='grid grid-cols-12' >
        <div className='col-span-2 bg-customBlue h-full p-4 w-43 fixed top-12 left-0 '>
          <Sidebar/>
        </div >
       
     
    
    <div className="col-span-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Delivery Details Display Page</h1>
            
           
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 rounded mt-2 inline-block ml-46">
            <Link to="/adddelivery">Add Delivery</Link>
            </div>
            
            <button onClick={handlePrint} className="  text-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 mt-2 ml-4 rounded inline-block">Download Report</button>
            <br></br>
            <br></br>
            <div className="mb-2 ml-46">
            <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="search"
                placeholder="Search Delivery Details"
                value={searchQuery} // Add value prop
                className="border border-gray-300 rounded-md px-3 py-2 mr-2"
            />
           
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button><br></br>
            </div>
            {noResult ? (
                <div>
                    <p>No delivery details found</p>
                </div>
            ) : (

                <div  ref={ComponentsRef}>
                    
                    <table className="table-auto w-full border-collapse ml-46">
 
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-2 py-2 border border-solid border-gray-400 rounded-md shadow-md">Package ID</th>
                            <th className="px-2 py-2 border border-solid border-gray-400 rounded-md shadow-md">Customer Name</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Address</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Package Size</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Weight</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Delivery Man</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Delivery Service</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Dispatch Date</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Expected Date</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Status</th>
                            <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {delivery && delivery.map((delivery, i) => (
                            <Delivery key={i} delivery={delivery} />
                        ))}
                    </tbody>
                    
                </table>
            </div>
            
            )}
            </div>
        </div>
       
    </section>
      
    </React.Fragment>
    );
}

export default DeliveryDetails;
