import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../Login/Login";
import logoimage from "../images/logo.png"

const NavBar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#073068" }}> 
        <Navbar.Brand href="/mainhome">
          <div style={{position: "absolute", top: "10px",left: "25px"}}>
            <img src = {logoimage} alt = "logo" style={{width: "40px", height: "40px"}}></img>
          </div>
          <h1 style={{ color: "white", fontFamily: "cursive", textDecoration: "bolder" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Petpulse</h1> 
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/mainhome"
            className={location.pathname === "/mainhome" ? "active" : ""}
            style={{ color: "white" }} 
          >
            Home
          </Nav.Link>
          
          <Nav.Link
            href="/Otp"
            className={location.pathname === "/Otp" ? "active" : ""}
            style={{ color: "white" }} 
          >
            Otp
          </Nav.Link>

          <Nav.Link
            href="/ViewPets"
            className={location.pathname === "/ViewPets" ? "active" : ""}
            style={{ color: "white" }} 
          >
            View Pets
          </Nav.Link>

          <Nav.Link
            href="/AddPets"
            className={location.pathname === "/AddPets" ? "active" : ""}
            style={{ color: "white" }} 
          >
            AddPets
          </Nav.Link>

          <Nav.Link
            href="/PetItems"
            className={location.pathname === "/PetItems" ? "active" : ""}
            style={{ color: "white" }}
          >
            Pet Items
          </Nav.Link>

          <Nav.Link
            href="/userdetails"
            className={location.pathname === "/userdetails" ? "active" : ""}
            style={{ color: "white" }}
          >
            View User Details
          </Nav.Link>
          <Nav.Link
            href="/AddAdmin"
            className={location.pathname === "/AddAdmin" ? "active" : ""}
            style={{ color: "white" }} 
          >
            Add Admin
          </Nav.Link>
          <Nav.Link
            href="/AdminDashboard"
            className={location.pathname === "/AdminDashboard" ? "active" : ""}
            style={{ color: "white" }} 
          >
            Admin Dashboard
          </Nav.Link>
          <Nav.Link
            href="/ViewEmployees"
            className={location.pathname === "/ViewEmployees" ? "active" : ""}
            style={{ color: "white" }} 
          >
            View Employees
          </Nav.Link>
          
          <Nav.Link
            href="/Petprofile"
            className={location.pathname === "/Petprofile" ? "active" : ""}
            style={{ color: "white" }} 
          >
            Pet profile
          </Nav.Link>

          <NavDropdown title="Login or Sign Up" style={{ color: "white" }}> {/* Text color */}
            <NavDropdown.Item onClick={toggleLogin}>Login</NavDropdown.Item>
            <NavDropdown.Item href="/AdminLogin">Admin Login</NavDropdown.Item>
            <NavDropdown.Item href="/adduser">Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/mainhome">Log Out</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar>
      {showLogin && <Login onClose={toggleLogin} />}
    </>
  );
};

export default NavBar;
