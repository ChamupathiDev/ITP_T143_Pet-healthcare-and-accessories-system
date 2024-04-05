import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Product from "./Product";
import {Link} from "react-router-dom"

const URL = "http://Localhost:8070/products/getAll";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function Displayproduct() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
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
          <Link to="/addproduct">
            <button>Add Product</button>
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
                      Description
                    </th>
                    <th className="px-4 py-2 border-black border-2">Price</th>
                    <th className="px-2 py-2 border-black border-2">
                      Stock Alert Threshold
                    </th>
                    <th className="px-2 py-2 border-black border-2">
                      Reorder Point
                    </th>
                    <th className="px-4 py-2 border-black border-2">
                      Image 
                    </th>
                    <th className="px-4 py-2 border-black border-2">
                      Category
                    </th>
                    <th className="px-2 py-2 border-black border-2">Edit</th>
                    <th className="px-2 py-2 border-black border-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product, i) => (
                      <Product key={i} product={product} />
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

export default Displayproduct;
