import React, { useEffect, useState } from "react";
import axios from "axios";
import Catalog from "./Catalog";

const UserProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8070/products/getAll");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((catalog) => (
            <Catalog key={catalog._id} catalog={catalog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProductCatalog;
