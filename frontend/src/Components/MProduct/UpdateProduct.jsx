import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateProduct() {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect (()=>{
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/products/${id}`)
                .then((res) => res.data)
                .then((data) => {
                    // Set the product details including the image data
                    setInputs(data.products);
                    // If the product has an image, create a file object and set it in the state
                    if (data.products.image) {
                        const file = new File([""], data.products.image);
                        setInputs((prevState) => ({
                            ...prevState,
                            image: file,
                        }));
                    }
                })
                .catch((error) => {
                    console.error("Error fetching product:", error);
                });
        };
        fetchHandler();
    }, [id]);
    

    const handleChange = (e) => {
        if (e.target.name === "image") {
          // Update state with the selected file
          const file = e.target.files[0];
          if (file && file.size > 0) {
          setInputs((prevState) => ({
            ...prevState,
          
            image: e.target.files[0], // Access the selected file
          }));
        }
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
          const response = await axios.post("http://localhost:5000/upload", formData);
          const imageUrl = response.data.image;
      
          // Once the image is uploaded, send the product data to the database
          sendRequest(imageUrl);

          sendRequest().then(()=>
      
          // Redirect to the display product page
          history("/displayproduct"));
        } catch (error) {
          console.error("Error uploading image:", error);
          // Handle error
        }
      };

      const sendRequest = async ()=>{
        await axios
        .put(`http://localhost:5000/products/${id} `,{
          ppid: String(inputs.ppid),
          name: String(inputs.name),
          image: String(inputs.image.name),
          description: String(inputs.description),
          price: inputs.price,
          quantity: inputs.quantity,
          manufactureDate: String(inputs.manufactureDate),
          expireDate: String(inputs.expireDate),
          stockAlertThreshold: inputs.stockAlertThreshold,
          reorderPoint: inputs.reorderPoint,
          category: String(inputs.category),
          brand: String(inputs.brand),
        })
        .then((res) => res.data);
    }
      

    
  return (
    <React.Fragment>
    <section >
      <div>
        <Nav />
      </div>
    </section>

    <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>
          <div className="col-span-8 p-8 rounded-md shadow-md text-3xl text-center font-bold underline">
            <h1>Update Product Form</h1>
          </div>
          <form className="col-span-8 p-8  mt-4 rounded-md shadow-3xl border border-blue-700 border-blur-3xl border-opacity-30" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-bold">PPID:</label>
            <input
              type="text"
              name="ppid"
              onChange={handleChange}
              value={inputs.ppid}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
             </div>
          <div className="mb-4">
            <label className="font-bold">Name:</label>
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
            <label className="font-bold">Image</label>
            <br />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              
              
            ></input>
            {inputs.image && inputs.image.name && (
              <p className="mt-3">Selected file: {inputs.image.name}</p>
            )}
            </div>
             <div className="mb-4">
            <label className="font-bold">Description:</label>
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
            <label className="font-bold">Price:</label>
            <br />
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={inputs.price}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label className="font-bold">Quantity</label>
            <br />
            <input
              type="number"
              name="quantity"
              onChange={handleChange}
              value={inputs.quantity}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            <div className="mb-4">
            <label className="font-bold">Manufacture Date</label>
            <br />
            <input
              type="text"
              name="manufactureDate"
              onChange={handleChange}
              value={inputs.manufactureDate}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            <div className="mb-4">
            <label className="font-bold">Expire Date</label>
            <br />
            <input
              type="text"
              name="expireDate"
              onChange={handleChange}
              value={inputs.expireDate}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>

            <div className="mb-4">
            <label className="font-bold">Stock Alert Threshold</label>
            <br />
            <input
              type="number"
              name="stockAlertThreshold"
              onChange={handleChange}
              value={inputs.stockAlertThreshold}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label className="font-bold">Reorder Point</label>
            <input
              type="number"
              name="reorderPoint"
              onChange={handleChange}
              value={inputs.reorderPoint}
              className="border border-black p-2 w-full rounded-xl"
              required
            ></input>
            </div>
            <div className="mb-4">
            <label className="font-bold">Category</label>
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
            <div className="mb-4">
            <label className="font-bold">Brand</label>
            <br />
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              value={inputs.brand}
              className="border border-black p-2 w-full rounded-xl"
              required
            />
            </div>
            <button className="bg-blue-500 text-white text-lg py-4 px-8 rounded-xl">submit</button>
          </form>
        </div>
      </section>
        </React.Fragment>
  )
}

export default UpdateProduct
