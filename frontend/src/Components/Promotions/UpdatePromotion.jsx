import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdatePromotion() {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect (()=>{
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/promotions/${id}`)
                .then((res) => res.data)
                .then((data) => setInputs(data.promotions));
        };
        fetchHandler();
    }, [id]);
    

    const handleChange = (e) => {
    
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
  
      sendRequest().then(()=>
      history("/displaypromotion"));
  
    };
      const sendRequest = async ()=>{
        await axios
        .put(`http://localhost:5000/promotions/${id} `,{
            name: String(inputs.name),
            type: String(inputs.type),
            startDate: String(inputs.startDate),
            endDate: String(inputs.endDate),
        })
        .then((res) => res.data);
    };
      

    
  return (
    <React.Fragment>
     
    <section >
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
            <h1>Update Promotion Form</h1>
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
            <label className="font-bold">Promotion Type:</label>
            <br />
            <input
              type="text"
              name="type"
              onChange={handleChange}
              value={inputs.type}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            
            <div className="mb-4">
            <label className="font-bold">Start Date</label>
            <br />
            <input
              type="text"
              name="startDate"
              onChange={handleChange}
              value={inputs.startDate}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            <div className="mb-4">
            <label className="font-bold">End Date</label>
            <br />
            <input
              type="text"
              name="endDate"
              onChange={handleChange}
              value={inputs.endDate}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>

            <button className="bg-blue-500 text-white text-lg py-4 px-8 rounded-xl">submit</button>
          </form>
        </div>
      </section>
    
        </React.Fragment>
  )
}

export default UpdatePromotion;
