import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import { useNavigate } from 'react-router';
import axios from 'axios';

function AddDelivery() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        address: "",
        packSize: "",
        weight: "",
        delman: "",
        delservice: "",
        dispatchDate: "",
        expectedDate: "",
        status: "",
    });

    const [packageSizeError, setPackageSizeError] = useState('');
    const [weightError, setWeightError] = useState('');

    const handlechange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (name === 'weight') {
            if (!/^\d+(\.\d+)?$/.test(value) || parseFloat(value) <= 0) {
                setWeightError('Please enter a valid weight (greater than 0)');
            } else {
                setWeightError('');
            }
        }

        if (name === 'packSize') {
            if (!/^\d+(\.\d+)?\*\d+(\.\d+)?\*\d+(\.\d+)?$/.test(value)) {
                setPackageSizeError('Please enter a valid package size pattern (e.g., 2.0*0.5*1.0)');
            } else {
                setPackageSizeError('');
            }
        }
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!weightError && !packageSizeError) {
            await sendRequest();
            history('/deliverydetails');
        }
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/delivery", {
            name: String(inputs.name),
            address: String(inputs.address),
            packSize: String(inputs.packSize),
            weight: String(inputs.weight),
            delman: String(inputs.delman),
            delservice: String(inputs.delservice),
            dispatchDate: String(inputs.dispatchDate),
            expectedDate: String(inputs.expectedDate),
            status: String(inputs.status),
        }).then(res => res.data);
    };

    return (
        <div>

<section>
        <div>
          <Nav />
        </div>
      </section>
           
            <h1 className="text-3xl font-bold mb-4">Add Delivery Details</h1>
            <form onSubmit={handlesubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1">Name</label>
                    <input type="text" name="name" onChange={handlechange} value={inputs.name} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Address</label>
                    <input type="text" name="address" onChange={handlechange} value={inputs.address} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Pack Size</label>
                    <input type="text" name="packSize" onChange={handlechange} value={inputs.packSize} required className={`border border-gray-300 rounded-md px-3 py-2 ${packageSizeError ? 'border-red-500' : ''}`} />
                    {packageSizeError && <p className="text-red-500 text-xs mt-1">{packageSizeError}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Weight</label>
                    <input type="text" name="weight" onChange={handlechange} value={inputs.weight} required className={`border border-gray-300 rounded-md px-3 py-2 ${weightError ? 'border-red-500' : ''}`} />
                    {weightError && <p className="text-red-500 text-xs mt-1">{weightError}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Delivery Man</label>
                    <input type="text" name="delman" onChange={handlechange} value={inputs.delman} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Delivery Service</label>
                    <input type="text" name="delservice" onChange={handlechange} value={inputs.delservice} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Dispatch Date</label>
                    <input type="date" name="dispatchDate" onChange={handlechange} value={inputs.dispatchDate} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Expected Date</label>
                    <input type="date" name="expectedDate" onChange={handlechange} value={inputs.expectedDate} required className="border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Status</label>
                    <select name="status" value={inputs.status} onChange={handlechange}  className="border border-gray-300 rounded-md px-3 py-2">
                        <option value="">Select Status</option>
                        <option value="processing">Processing</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
        </div>
    );
}

export default AddDelivery;
