import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from "../Nav/Nav";

function DeliveryTrackingUpdate  () {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5000/tracking/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.tracking));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async ()=>{
        await axios.put(`http://localhost:5000/tracking/${id}`,{
            name:String (inputs.name),
            status1:String (inputs.status1),
            date1:String (inputs.date1),
            status2:String (inputs.status2),
            date2:String (inputs.date2),
            status3:String (inputs.status3),
            date3:String (inputs.date3),
            
        })
        .then((res)=> res.data);
    };

    const handlechange =(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handlesubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>
        history('/trackingdetails')
        );
        
    };
    return (
        <div>
        <Nav />
        <h1 className="text-3xl font-bold mb-4">Add Tracking Details</h1>
        <form onSubmit={handlesubmit} className="space-y-4">
      <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input type="text" name="name" onChange={handlechange} value={inputs.name}  className="border border-gray-300 rounded-md px-3 py-2" />
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Status 1</label>
          <select name="status1" value={inputs.status1} onChange={handlechange}  className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Select Status 1</option>
              <option value="notyet">Not yet</option>
              <option value="packed">Packed</option>
          </select>
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Date 1</label>
          <input type="date" name="date1" onChange={handlechange} value={inputs.date1} className="border border-gray-300 rounded-md px-3 py-2" />
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Status 2</label>
          <select name="status2" value={inputs.status2} onChange={handlechange}  className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Select Status 2</option>
              <option value="notyet">Not Yet</option>
              <option value="dispatched">Dispatched</option>
              
          </select>
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Date 2</label>
          <input type="date" name="date2" onChange={handlechange} value={inputs.date2} className="border border-gray-300 rounded-md px-3 py-2" />
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Status 3</label>
          <select name="status3" value={inputs.status3} onChange={handlechange}  className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Select Status 3</option>
              <option value="notyet">Not Yet</option>  
              <option value="complete">Complete</option>
          </select>
      </div>
  
      <div className="flex flex-col">
          <label className="mb-1">Date 3</label>
          <input type="date" name="date3" onChange={handlechange} value={inputs.date3} className="border border-gray-300 rounded-md px-3 py-2" />
      </div>
  
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
  </form>
  </div>
    
      );

  
}

export default DeliveryTrackingUpdate

  
