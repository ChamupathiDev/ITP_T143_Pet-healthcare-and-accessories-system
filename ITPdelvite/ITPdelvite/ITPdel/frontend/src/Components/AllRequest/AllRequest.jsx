import React, { useEffect, useState } from 'react';
import Nav from "../Nav/Nav";
import axios from "axios";
import Tracking from "../Tracking/Tracking";
import Request from "../Request/Request";


const URL1 = "http://localhost:5000/tracking";
const URL = "http://localhost:5000/requestform";


const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function AllRequest() {

  
    const [requestform, setAllRequest] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setAllRequest(data.reqs));
    }, [])

    return (
        <div>
            <Nav />
            <h1 className="text-2xl font-bold mb-4">Tracking Details Display Page</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status1</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date1</th>
                            
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestform && requestform.map((reqs, i) => (
                            <Request key={i} reqs={reqs} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllRequest;




