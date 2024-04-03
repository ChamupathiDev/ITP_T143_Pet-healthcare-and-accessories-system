import React from "react";

function Product(props) {
  const {
    _id,
    name,
    description,
    price,
    stockAlertThreshold,
    reorderPoint,
    imageUrl,
    category,
  } = props.product;
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
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
        className="px-4 py-2 border-black border-2 overflow-hidden max-w-xs"
        title={imageUrl}
      >
        {truncateText(imageUrl, 20)}
      </td>
      <td className="px-4 py-2 border-black border-2">{category}</td>
      <td className="px-4 py-2 border-black border-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded mr-2">
          Update
        </button>
      </td>
      <td className=" px-4 py-2 border-black border-2">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-2 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;
