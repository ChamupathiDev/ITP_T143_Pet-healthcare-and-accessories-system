import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Discount from "./Discount"; 
import {Link} from "react-router-dom"

const URL = "http://localhost:8070/discounts/getAll";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function DisplayDiscount() {
  const [discounts, setDiscounts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setDiscounts(data.discounts));
  }, []);

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
          <Link to="/adddiscount">
            <button>Add Discount</button>
            </Link>
            </div>
            <br/>
            <br/>
            <div className=" mt-4 ">
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border-black border-2">ID</th>
                    <th className="px-4 py-2 border-black border-2">Name</th>
                   
                    <th className="px-4 py-2 border-black border-2">
                      Discount Type
                    </th>
                    
                    <th className="px-4 py-2 border-black border-2">
                      Amount
                    </th>
                    <th className="px-4 py-2 border-black border-2">
                      Applicable Product
                    </th>
                   
                    <th className="px-1 py-1 border-black border-2">Edit</th>
                    <th className="px-1 py-1 border-black border-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {discounts &&
                    discounts.map((discount, i) => (
                      <Discount key={i} discount={discount} />
                    ))}
                </tbody>
              </table>
            </div>
            
            
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
}




export default DisplayDiscount;
