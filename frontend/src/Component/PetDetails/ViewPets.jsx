import React, { useState, useEffect, useRef } from "react";
import Navbar from "../nav/nav";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/pets";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function ViewPets() {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setPets(data.Pets));
  }, []);

  const ComponentsRef = useRef();

  //--- Create Pdf ---
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Pet's Report",
    onAfterPrint: () => alert("Pet report Successfully Downloaded!.."),
  });

  //DELETE USER
  const deletepet = async (_id) => {
    try {
      await axios.delete(`${URL}/${_id}`);
      // After deletion, fetch the updated list of users
      const updatedpets = pets.filter((pet) => pet._id !== _id);
      setPets(updatedpets);
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  //--- Create Search ---
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredPets = data.Pets.filter((pet) =>
        Object.values(pet).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setPets(filteredPets);
    });
  };

  return (
    <div>
      <Navbar />
      &nbsp;
      <center>
        <h1>Pet Details</h1>
      </center>
      <div
        className="seachbar"
        style={{ position: "relative", top: "-20px", left: "1100px" }}
      >
        <input //--- Search Bar ---
          type="text"
          name="Search"
          placeholder="Search Users Details"
          onChange={(e) => setSearchQuery(e.target.value)}
        />{" "}
        &nbsp;
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-1 rounded hover:bg-blue-700 mr-2"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <div ref={ComponentsRef}>
          <table className="border-4 border-collapse w-99">
            <thead>
              <tr>
                <th className="border p-2">Pet Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Breed</th>
                <th className="border p-2">Birthday</th>
                <th className="border p-2">Sex</th>
                <th className="border p-2">Weight</th>
                <th className="border p-2">Microchip Id</th>
                <th className="border p-2">Color</th>
                <th className="border p-2">Owner</th>
                <th className= "print:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
                <tr key={pet._id}>
                  <td className="border p-2">
                    <img src={`http://localhost:5000/profileimage/${pet.petImage}`} alt="User Image" style={{ maxWidth: "50px", borderRadius: "50%" }} />
                  </td>
                  <td className="border p-2">{pet.name}</td>
                  <td className="border p-2">{pet.type}</td>
                  <td className="border p-2">{pet.breed}</td>
                  <td className="border p-2">{pet.birthday}</td>
                  <td className="border p-2">{pet.sex}</td>
                  <td className="border p-2">{pet.weight}</td>
                  <td className="border p-2">{pet.microchipId}</td>
                  <td className="border p-2">{pet.color}</td>
                  <td className="border p-2">{pet.owner}</td>
                  <td className= "print:hidden">&nbsp;&nbsp;
                    <Link to={`/UpdatePet/${pet._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => deletepet(pet._id)}
                    >
                      Delete
                    </button>&nbsp;&nbsp;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="print"
        style={{ position: "absolute", top: "95px", left: "1350px" }}
      >
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handlePrint}
        >
          Download Report
        </button>
      </div>
    </div>
  );
}

export default ViewPets;
