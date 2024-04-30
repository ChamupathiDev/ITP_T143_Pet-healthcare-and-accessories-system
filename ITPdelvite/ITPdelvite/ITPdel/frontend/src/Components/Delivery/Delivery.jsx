import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Delivery(props) {
    const { _id, name, address, packSize, weight, delman, delservice, dispatchDate, expectedDate, status } = props.delivery;
    const history = useNavigate();

    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/delivery/${_id}`)
            .then(res => res.data)
            .then(() => history("/"))
            .then(() => history("/deliverydetails"))
    }

   
    return (
        <tr >
            <td className="px-2 py-2 border border-solid border-gray-400 rounded-md shadow-md">{_id}</td>
            <td className="px-2 py-2 border border-solid border-gray-400 rounded-md shadow-md">{name}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{address}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{packSize}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{weight}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{delman}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{delservice}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{dispatchDate}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{expectedDate}</td>
            <td className="px-4 py-2 border border-solid border-gray-400 rounded-md shadow-md">{status}</td>
            <td className=" px-1 py-1 border border-solid border-gray-400 rounded-md shadow-md print:hidden">
                <Link to={`/deliverydetails/${_id}`} className="text-blue-600 hover:text-blue-900">Update</Link>
                
                <button onClick={deleteHandler} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
            </td>
        </tr>
    )
}

export default Delivery;



