import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

/* ---- Import Components ---- */
import Home from "./Component/Home/Home";
import User from "./Component/UserDetails/ViewUsers";
import Adduser from "./Component/Add User/AddUser";
import UpdateUser from "./Component/Update User/UpdateUser";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./Component/Login/Login";
import UserDashboard from "./Component/Dashboards/UserDashboard";
import Otp from "./Component/OTP_Verify/otp";
import NavBar from "./Component/nav/nav user";
import AddPets from "./Component/Add pets/Addpets";
import ViewPets from "./Component/PetDetails/ViewPets";
import UpdatePet from "./Component/Update pets/UpdatePet";
import Pet from "./Component/PetDetails/ViewPets";
import AdminDashboard from "./Component/Dashboards/AdminDashboard";
import AddAdmin from "./Component/Add User/AddAdmin";
import AdminLogin from "./Component/Login/AdminLogin";
import Updateemployee from "./Component/Update Employees/Updateemployees";
import ViewEmployees from "./Component/EmployeeDetails/ViewEmployees";
import Loginupdate from "./Component/Login/Loginupdate";
import UpdateUseradmin from "./Component/Update User/UpdateUseradmin";
import NavbarAdmin from "./Component/nav/nav admin";
import Petprofile from "./Component/Dashboards/Petprofile"

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/userdetails" element={<User />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/AddPets" element={<AddPets />} />
          <Route path="/ViewPets" element={<ViewPets />} />
          <Route path="/petdetails" element={<Pet />} />
          <Route path="/UpdatePet/:id" element={<UpdatePet />} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Updateemployee/:id" element={<Updateemployee />} />
          <Route path="/ViewEmployees" element={<ViewEmployees />} />
          <Route path="/Loginupdate" element={<Loginupdate />} />
          <Route path="/UpdateUseradmin/:id" element={<UpdateUseradmin />} />
          <Route path="/NavbarAdmin" element={<NavbarAdmin />} />
          <Route path="/UserDashboard/:email" element={<UserDashboard />} />
          <Route path="/AdminDashboard/:email" element={<AdminDashboard />} />
          <Route path="/Petprofile/:email" element={<Petprofile />} />
          {/* Route for UserDashboard with props */}
          <Route
            path="/UserDashboard"
            element={<UserDashboard email={window.history.state?.email} />}
          />
          <Route
            path="/Petprofile"
            element={<Petprofile email={window.history.state?.email} />}
          />
          <Route
            path="/AdminDashboard"
            element={<AdminDashboard email={window.history.state?.email} />}
          />
          <Route path="/mainhome" element={<Navigate to="/mainhome" />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
