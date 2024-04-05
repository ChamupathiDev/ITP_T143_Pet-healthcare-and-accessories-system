import React from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const {
    _id,
    name,
    description,
    price,
    stockAlertThreshold,
    reorderPoint,
    image,
    category,
  } = props.product;
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  const imageBaseUrl = "http://localhost:8070/uploads";

  const history = useNavigate();

  const deleteHandler = async()=>{
    await axios.delete(`http://Localhost:8070/products/${_id}`)
    .then(res=> res.data)
    .then(() =>history("/"))
    .then(() =>history("/displayproduct"));
  }
  
  return (
    <tr>
      <td className="px-4 py-2 border-black border-2" title={_id}>
        {truncateText(_id, 5)}
      </td>
      <td className="px-4 py-2 border-black border-2" title={name}>
        {truncateText(name, 10)}
      </td>
      <td
        className="px-4 py-2 border-black border-2 overflow-hidden max-w-xs "
        title={description}
      >
        {truncateText(description, 30)}
      </td>
      <td className="px-4 py-2 border-black border-2 text-center">{price}</td>
      <td className="px-2 py-2 border-black border-2 text-center">
        {stockAlertThreshold}
      </td>
      <td className="px-2 py-2 border-black border-2 text-center">
        {reorderPoint}
      </td>
      <td
        className="px-4 py-4 border-black border-2 overflow-hidden max-w-xs"
        title={image}
      >
     {image && ( // Check if image property exists
          <img
            src={`${imageBaseUrl}/${image}`} // Construct image URL using base URL and image name
            alt={image}
            className="w-24 h-24"
          />
        )}
      </td>
      <td className="px-4 py-2 border-black border-2">{category}</td>
      <td className="px-4 py-2 border-black border-2">
        <Link to={`/displayproduct/${_id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded mr-2">
          Update
        </button>
        </Link>
      </td>
      <td className=" px-4 py-2 border-black border-2">
        <button onClick={deleteHandler} className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-2 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;
