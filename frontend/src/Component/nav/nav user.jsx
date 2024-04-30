import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../Login/Login";
import { useLocation } from "react-router-dom";

const NavBar = ({ userEmail }) => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#073068" }}>
        <Navbar.Brand href="/mainhome">
          <h1
            style={{
              color: "white",
              fontFamily: "cursive",
              textDecoration: "bolder",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </Navbar.Brand>

        <Nav.Link
          href="/mainhome"
          className={location.pathname === "/mainhome" ? "active" : ""}
          style={{ color: "white" }}
        >
          {userEmail}
        </Nav.Link>

        <Nav className="me-auto">
          <div
            style={{
              position: "absolute",
              left: "1390px",
              top: "15px",
              color: "white",
            }}
          >
            <NavDropdown
              title={
                <>
                  <span style={{ marginLeft: "5px" }}>{userEmail}</span>
                </>
              }
              style={{
                color: "white",
                width: "50px",
                height: "30px",
                backgroundColor: "#073068",
              }}
              drop="#f0f2f2"
              menuVariant="#f0f2f2"
              renderMenuOnMount={true} // Ensure the dropdown menu is rendered on mount
            >
              <style>
                {`
      .navbar-dark .navbar-nav .nav-link.dropdown-toggle::after {
        border-top-color: white !important; // Set the color of the dropdown arrow
      }
      `}
              </style>
              <NavDropdown.Item href="/mainhome" style={{ color: "red", width: "10px" }}>
                <b>Log Out</b>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar>
      {showLogin && <Login onClose={toggleLogin} />}
    </>
  );
};

export default NavBar;
