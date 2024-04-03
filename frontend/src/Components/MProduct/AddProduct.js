import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AddProduct() {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    description:"",
    price:"",
    stockAlertThreshold:"",
    reorderPoint:"",
    imageUrl:"",
    category:"",
  });
  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/displayproduct'))
  }

  const sendRequest = async()=>{
    await axios.post("http://Localhost:8070/products/add",{
      name: String (inputs.name),
      description: String (inputs.description),
      price: String (inputs.price),
      stockAlertThreshold: String (inputs.stockAlertThreshold),
      reorderPoint: String (inputs.reorderPoint),
      imageUrl: String (inputs.imageUrl),
      category: String (inputs.category),
      
    }).then(res => res.data);
  }
  return (
    <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section  className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br/>
            <input type="text" name="name" onChange={handleChange} value={inputs.name} required></input>
            <br></br>
            <br></br>
            <label>Description:</label>
            <br/>
            <input type="text" name="description" onChange={handleChange} value={inputs.description} required></input>
            <br></br>
            <br></br>
            <label>Price:</label>
            <br/>
            <input type="text" name="price" onChange={handleChange} value={inputs.price} required></input>
            <br></br>
            <br></br>
            <label>Stock Alert Threshold</label>
            <br/>
            <input type="text" name="stockAlertThreshold" onChange={handleChange} value={inputs.stockAlertThreshold} required></input>
            <br></br>
            <br></br>
            <label>Reorder Point</label>
            <input type="text" name="reorderPoint" onChange={handleChange} value={inputs.reorderPoint} required></input>
            <br></br>
            <br></br>
            <label>Image Url</label>
            <br/>
            <input type="text" name="imageUrl" onChange={handleChange} value={inputs.imageUrl} required></input>
            <br></br>
            <br></br>
            <label>Category</label>
            <br/>
            <input type="text" name="category" onChange={handleChange} value={inputs.category} required></input>
            <button>submit</button>
          </form>

          </div>
      </section>
    </React.Fragment>
  )
}

export default AddProduct
