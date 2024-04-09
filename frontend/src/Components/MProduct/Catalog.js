import React from "react";

function Catalog(props) {
  const { name, image, price } = props.catalog;
  const imageBaseUrl = "http://localhost:8070/uploads";

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${imageBaseUrl}/${image}`}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Price: {price}
        </p>
      </div>
    </div>
  );
}

export default Catalog;
