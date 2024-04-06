import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Reorder from "./Reorder";
import {Link} from "react-router-dom"

const URL = "http://localhost:8070/reorders/getAll";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function DisplayReorder() {
  const [reorders, setReorders] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setReorders(data.reorders));
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
          <Link to="/addreorder">
            <button>Add Reorder</button>
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
                      Reorder Quantity
                    </th>
                    
                    <th className="px-4 py-2 border-black border-2">
                      Supplier Name
                    </th>
                    <th className="px-4 py-2 border-black border-2">
                      Supplier No
                    </th>
                   
                    <th className="px-1 py-1 border-black border-2">Edit</th>
                    <th className="px-1 py-1 border-black border-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {reorders &&
                    reorders.map((reorder, i) => (
                      <Reorder key={i} reorder={reorder} />
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




export default DisplayReorder;
