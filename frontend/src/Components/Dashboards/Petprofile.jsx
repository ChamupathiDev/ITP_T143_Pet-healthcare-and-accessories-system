import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../nav/nav user"; // Import Navbar component
import { Link } from "react-router-dom";

const PetProfile = () => {
  const { microchipId } = useParams(); // Assuming microchipId is passed as a parameter in the URL
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetsByMicrochipId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pets/microchipId/${microchipId}`
        );
        setPets(response.data.pets);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setLoading(false);
      }
    };

    fetchPetsByMicrochipId();
  }, [microchipId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pets.length > 0 ? (
          <div>
            {pets.map((pet) => (
              <div
                key={pet._id}
                style={{
                  background: "#fff",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
                  padding: "10px",
                  borderRadius: "8px",
                  margin: "20px",
                  width: "750px",
                  height: "450px",
                }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1
                  style={{
                    color: "#333",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontFamily: "fantasy",
                  }}
                >
                  {pet.name}
                </h1>
                <br />
                <div style={{ position: "absolute", left: "510px" }}>
                  <h4>
                    <strong>Type:</strong> {pet.type}
                  </h4>
                  <p />
                  <h4>
                    <strong>Breed:</strong> {pet.breed}
                  </h4>
                  <p />
                  <h4>
                    <strong>Birthday:</strong>{" "}
                    {new Date(pet.birthday).toLocaleDateString()}
                  </h4>
                  <p />
                  <h4>
                    <strong>Sex:</strong> {pet.sex}
                  </h4>

                  <div
                    style={{
                      position: "absolute",
                      left: "250px",
                      top: "-13px",
                      width: "500px",
                    }}
                  >
                    <p />
                    <h4>
                      <strong>Weight:</strong> {pet.weight} lbs
                    </h4>
                    <p />
                    <h4>
                      <strong>Microchip ID:</strong> {pet.microchipId}
                    </h4>
                    <p />
                    <h4>
                      <strong>Color:</strong> {pet.color}
                    </h4>
                    <p />
                    <h4>
                      <strong>Owner:</strong> {pet.owner}
                    </h4>
                    <br />
                  </div>
                </div>
                <div
                  style={{ position: "absolute", left: "670px", top: "150px" }}
                >
                  <img
                    src={`http://localhost:5000/profileimage/${pet.petImage}`}
                    alt={pet.name}
                    style={{
                      maxWidth: "200px",
                      borderRadius: "50%",
                      display: "block", 
                      margin: "0 auto", 
                    }}
                  />
                </div>

                <div style={{position:"absolute",top:"15px",left:"1400px"}}>
                <Link to={`/UserDashboard/${pet.owner}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Go Back
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No pets found for microchip ID: {microchipId}.</p>
        )}
      </div>
    </div>
  );
};

export default PetProfile;
