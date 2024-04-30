import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import { useNavigate } from 'react-router';
import axios from 'axios';

function AddDelayForm() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
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
        history('/delaydetails');
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/delay", {
            email:String (inputs.email),
            packid:String (inputs.packid),
            issue:String (inputs.issue),
        }).then(res => res.data);
    };

    return (
        <div>
        <Nav/>
        <h1 className="text-3xl font-bold mb-4">Add Delay Details</h1>
            <form onSubmit={handlesubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1">Email</label>
                    <input type="email" name="email" onChange={handlechange} value={inputs.email} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Package ID</label>
                    <input type="text" name="packid" onChange={handlechange} value={inputs.packid} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Issue</label>
                    <input type="text" name="issue" onChange={handlechange} value={inputs.issue} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
    </div>
    );
}

export default AddDelayForm;
