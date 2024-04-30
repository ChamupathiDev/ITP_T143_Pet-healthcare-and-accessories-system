import React, { useState, useEffect, useRef } from "react";
import Navbar from "../nav/nav";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/employees";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setEmployees(data.employees));
  }, []);

  const ComponentsRef = useRef();

  //--- Create Pdf ---
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Employees Report",
    onAfterPrint: () => alert("Employees report Successfully Downloaded!.."),
  });

  //DELETE USER
  const deleteemployees = async (_id) => {
    try {
      await axios.delete(`${URL}/${_id}`);
      // After deletion, fetch the updated list of users
      const updateemployees = employees.filter(
        (employees) => employees._id !== _id
      );
      setEmployees(updateemployees);
    } catch (error) {
      console.error("Error deleting employees:", error);
    }
  };

  //--- Create Search ---
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredEmployees = data.employees.filter((employees) =>
        Object.values(employees).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setEmployees(filteredEmployees);
    });
  };

  return (
    <div>
      <Navbar />
      &nbsp;
      <center>
        <h1>Employee Details</h1>
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
      <div
        className="flex justify-center mt-10"
        style={{ width: "1440px", position: "absolute", left: "50px" }}
      >
        <div ref={ComponentsRef}>
          <table className="border-4 border-collapse w-99">
            <thead>
              <tr>
                <th className="border p-2">User Image</th>
                <th className="border p-2">Employee RegNo</th>
                <th className="border p-2">FullName</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Date Of Birth</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">job Title</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Start Date</th>
                <th className="border p-2">Employment Status</th>
                <th className="border p-2">password</th>
                <th className="print:hidden">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employees) => (
                <tr key={employees._id}>
                  <td className="border p-2">
                    <img
                      src={`http://localhost:5000/profileimage/${employees.userimage}`}
                      alt="User Image"
                      style={{ maxWidth: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td className="border p-2">{employees.employeeID}</td>
                  <td className="border p-2">{employees.fullName}</td>
                  <td className="border p-2">{employees.gender}</td>
                  <td className="border p-2">{employees.dateOfBirth}</td>
                  <td className="border p-2">{employees.address}</td>
                  <td className="border p-2">{employees.phoneNumber}</td>
                  <td className="border p-2">{employees.email}</td>
                  <td className="border p-2">{employees.jobTitle}</td>
                  <td className="border p-2">{employees.department}</td>
                  <td className="border p-2">{employees.startDate}</td>
                  <td className="border p-2">{employees.employmentStatus}</td>
                  <td className="border p-2">{employees.password}</td>
                  <td className="print:hidden">
                    &nbsp;&nbsp;
                    <Link to={`/AdminDashboard/${employees.email}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        View
                      </button>
                    </Link>
                    <Link to={`/Updateemployee/${employees._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
                      onClick={() => deleteemployees(employees._id)}
                    >
                      Delete
                    </button>
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

export default ViewEmployees;
