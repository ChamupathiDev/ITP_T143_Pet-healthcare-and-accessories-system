import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Request(props) {
    const { _id, gmail, packid, issue} = props.reqs;
    const history = useNavigate();

    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/requestforms/${_id}`)
            .then(res => res.data)
            .then(() => history("/"))
            .then(() => history("/requestdetails"))
    }

   
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{_id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{gmail}</td>
            <td className="px-6 py-4 whitespace-nowrap">{packid}</td>
            <td className="px-6 py-4 whitespace-nowrap">{issue}</td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/requestdetails/${_id}`} className="text-blue-600 hover:text-blue-900">Update</Link>
                <button onClick={deleteHandler} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
            </td>
        </tr>
    )
}

export default Request;



