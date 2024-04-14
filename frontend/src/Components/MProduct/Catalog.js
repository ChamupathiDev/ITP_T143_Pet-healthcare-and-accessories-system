import React from "react";

function Catalog(props) {
  const { name, image, price } = props.catalog;
  const imageBaseUrl = "http://localhost:8070/uploads";

  return (
    <div className="rounded overflow-hidden shadow-lg px-1 py-1">
      <img
        className="w-full"
        src={`${imageBaseUrl}/${image}`}
        alt={name}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Price: {price}
        </p>
      </div>
    </div>
  );
}

export default Catalog;
