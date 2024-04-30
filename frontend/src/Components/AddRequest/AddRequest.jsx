//AddRequest
import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import { useNavigate } from 'react-router';
import axios from 'axios';

function AddRequest() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        gmail: "",
        packid: "",
        issue: "",
       
    });

    const handlechange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await sendRequest();
        history('/requestdetails');
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/requestform", {
            gmail: String(inputs.gmail),
            packid: String(inputs.packid),
            issue: String(inputs.issue),
            
        }).then(res => res.data);
    };

    return (
        <div>
            <Nav />
            <h1 className="text-3xl font-bold mb-4">Add Request Details</h1>
            <form onSubmit={handlesubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1">Gmail</label>
                    <input type="text" name="gmail" onChange={handlechange} value={inputs.name} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">packid</label>
                    <input type="text" name="packid" onChange={handlechange} value={inputs.packid} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">issue</label>
                    <input type="text" name="issue" onChange={handlechange} value={inputs.issue} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
               
             
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            </form>

           
        </div>
        
    );
}

export default AddRequest;
