import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Promotion from "./Promotion";
import {Link} from "react-router-dom"
import { useReactToPrint } from 'react-to-print';


const URL = "http://localhost:8070/promotions/getAll";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function DisplayPromotion() {
  const [promotions, setPromotions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPromotions(data.promotions));
  }, []);

  const tableRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Promotions Report",
    onAfterPrint: () => alert("Promotions Report Successfully Downloaded!"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () =>{
    fetchHandler().then((data) =>{
      const filteredPromotions = data.promotions.filter((promotion) =>
    Object.values(promotion).some((field)=>
    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
    ))
    setPromotions(filteredPromotions);
    setNoResults(filteredPromotions.length === 0);
    });
  }

  return (
    <React.Fragment>
      <section >
        <div>
          <Nav />
        </div>
      </section>

      <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0  ">
            <Sidebar />
          </div>
          

          <div className="col-span-10 p-4">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 rounded mr-2 mt-5 inline-block">
          <Link to="/addpromotion">
            <button>Add Promotion</button>
            </Link>
            </div>
            <button onClick={handlePrint} className=" text-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 mt-2 ml-4 rounded inline-block">Download Promotion Report</button>
            <br/>
            <br/>

            <div className="mb-2">
            <input onChange={(e)=> setSearchQuery(e.target.value)}
            type="text"
            name="search"
            placeholder="search here"
            className="border border-black px-2 py-1">
            </input>

            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 inline-block ml-2">Search</button>
            </div>
            {noResults ? (
              <div>
                <p>No Promotions Found</p>
              </div>
            ): (
            <div ref={tableRef}>
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">ID</th>
                    <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">Name</th>
                   
                    <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">
                      Promotion Type
                    </th>
                    
                    <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">
                      Start Date
                    </th>
                    <th className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">
                      End Date
                    </th>
                   
                    <th className="px-1 py-1 border border-solid border-gray-400 rounded-md shadow-md print:hidden">Edit</th>
                    <th className="px-1 py-1 border border-solid border-gray-400 rounded-md shadow-md print:hidden">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {promotions &&
                    promotions.map((promotion, i) => (
                      <Promotion key={i} promotion={promotion} />
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




export default DisplayPromotion;
