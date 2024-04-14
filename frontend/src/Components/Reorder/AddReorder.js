import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddReorder() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    reorderQuantity: "",
    supplierName: "",
    supplierNo: "",
  });
  const handleChange = (e) => {
    
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    await sendRequest().then(()=>history("/displayreorder"))

  }
  const sendRequest = async () => {
    await axios
      .post("http://localhost:8070/reorders/add", {
        name: String(inputs.name),
        reorderQuantity: inputs.reorderQuantity,
        supplierName: String(inputs.supplierName),
        supplierNo: inputs.supplierNo,
      })
      .then((res) => res.data);
  };
  return (
    <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>
          <div className="col-span-8 p-8 rounded-md shadow-md text-3xl text-center font-bold underline">
            <h1>Add Reorder Form</h1>
          </div>
          <form className="col-span-8 p-8  mt-4 rounded-md shadow-3xl border border-blue-700 border-blur-3xl" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-bold">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
             </div>

             <div className="mb-4">
            <label className="font-bold">Reorder Quantity:</label>
            <br />
            <input
              type="number"
              name="reorderQuantity"
              onChange={handleChange}
              value={inputs.reorderQuantity}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            
            <div className="mb-4">
            <label className="font-bold">Supplier Name</label>
            <br />
            <input
              type="text"
              name="supplierName"
              onChange={handleChange}
              value={inputs.supplierName}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            <div className="mb-4">
            <label className="font-bold">Supplier No</label>
            <br />
            <input
              type="number"
              name="supplierNo"
              onChange={handleChange}
              value={inputs.supplierNo}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>

            <button className="bg-blue-500 text-white text-lg py-4 px-8 rounded-xl">submit</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AddReorder;
