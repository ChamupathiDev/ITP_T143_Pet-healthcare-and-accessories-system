import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    stockAlertThreshold: "",
    reorderPoint: "",
    image: "",
    category: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      // Update state with the selected file
      setInputs((prevState) => ({
        ...prevState,
      
        image: e.target.files[0], // Access the selected file
      }));
    } else {
      // For other input fields, update state with the input value
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    // Send request to upload image
    const formData = new FormData();
    formData.append("image", inputs.image);

    try {
      // Wait for the image upload request to complete
      const response = await axios.post("http://localhost:8070/upload", formData);
      const imageUrl = response.data.image;
  
      // Once the image is uploaded, send the product data to the database
      await sendRequest(imageUrl);
  
      // Redirect to the display product page
      history("/displayproduct");
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error
    }
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:8070/products/add", {
        name: String(inputs.name),
        description: String(inputs.description),
        price: String(inputs.price),
        stockAlertThreshold: String(inputs.stockAlertThreshold),
        reorderPoint: String(inputs.reorderPoint),
        image: String(inputs.image.name),
        category: String(inputs.category),
      })
      .then((res) => res.data);
  };
  return (
    <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>
          <form className="col-span-8 p-8 bg-zinc-400 mt-4 rounded-xl" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
             </div>
             <div className="mb-4">
            <label>Description:</label>
            <br />
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              value={inputs.description}
              className="border border-black p-2 w-full rounded-xl"
              rows= "4"
              required
            />
            </div>
            <div className="mb-4">
            <label>Price:</label>
            <br />
            <input
              type="text"
              name="price"
              onChange={handleChange}
              value={inputs.price}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label>Stock Alert Threshold</label>
            <br />
            <input
              type="text"
              name="stockAlertThreshold"
              onChange={handleChange}
              value={inputs.stockAlertThreshold}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label>Reorder Point</label>
            <input
              type="text"
              name="reorderPoint"
              onChange={handleChange}
              value={inputs.reorderPoint}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label>Image</label>
            <br />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              
              required
            ></input>
            {inputs.image && inputs.image.name && (
              <p className="mt-3">Selected file: {inputs.image.name}</p>
            )}
            </div>
            <div className="mb-4">
            <label>Category</label>
            <br />
            <input
              type="text"
              name="category"
              onChange={handleChange}
              value={inputs.category}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>

            <button className="bg-blue-500 text-white text-lg py-4 px-8 rounded-xl">submit</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AddProduct;
