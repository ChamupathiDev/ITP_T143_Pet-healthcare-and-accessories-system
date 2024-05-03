import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PetProfile = () => {
  const { email } = useParams(); // Assuming ownerId is passed as a parameter in the URL
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetsByOwner = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pets/owner/${email}`);
        setPets(response.data.pets); // Assuming the response data is structured as { pets: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setLoading(false); // Set loading to false to handle errors
      }
    };

    fetchPetsByOwner();
  }, [email]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {pets.length > 0 ? (
        <div>
          <h2>Pets Owned by {email}</h2>
          {pets.map((pet) => (
            <div key={pet._id}>
              <h3>{pet.name}</h3>
              <p><strong>Type:</strong> {pet.type}</p>
              <p><strong>Breed:</strong> {pet.breed}</p>
              <p><strong>Birthday:</strong> {new Date(pet.birthday).toLocaleDateString()}</p>
              <p><strong>Sex:</strong> {pet.sex}</p>
              <p><strong>Weight:</strong> {pet.weight} lbs</p>
              <p><strong>Microchip ID:</strong> {pet.microchipId}</p>
              <p><strong>Color:</strong> {pet.color}</p>
              {pet.petImage && (
                <img src={`http://localhost:5000/profileimage/${pet.petImage}`} alt={pet.name} style={{ maxWidth: "200px" }} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No pets found for owner {email}.</p>
      )}
    </div>
  );
};

export default PetProfile;
