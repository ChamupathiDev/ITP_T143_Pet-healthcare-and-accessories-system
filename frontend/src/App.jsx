import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

/* ---- Import Components ---- */
import Home from "./Components/Home/Home";
import User from "./Components/UserDetails/ViewUsers";
import Adduser from "./Components/Add User/AddUser";
import UpdateUser from "./Components/Update User/UpdateUser";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./Components/Login/Login";
import UserDashboard from "./Components/Dashboards/UserDashboard";
import Otp from "./Components/OTP_Verify/otp";
import NavBar from "./Components/nav/nav user";
import AddPets from "./Components/Add pets/Addpets";
import ViewPets from "./Components/PetDetails/ViewPets";
import UpdatePet from "./Components/Update pets/UpdatePet";
import Pet from "./Components/PetDetails/ViewPets";
import AdminDashboard from "./Components/Dashboards/AdminDashboard";
import AddAdmin from "./Components/Add User/AddAdmin";
import AdminLogin from "./Components/Login/AdminLogin";
import Updateemployee from "./Components/Update Employees/Updateemployees";
import ViewEmployees from "./Components/EmployeeDetails/ViewEmployees";
import Loginupdate from "./Components/Login/Loginupdate";
import UpdateUseradmin from "./Components/Update User/UpdateUseradmin";
import NavbarAdmin from "./Components/nav/nav admin";
import Petprofile from "./Components/Dashboards/Petprofile";
import Displayproduct from "./Components/MProduct/Displayproduct";
import DisplayDiscount from "./Components/Discount/DisplayDiscount";
import Report from "./Components/Report/Report";
import DisplayReorder from "./Components/Reorder/DisplayReorder";
import AddProduct from "./Components/MProduct/AddProduct";
import UpdateProduct from "./Components/MProduct/UpdateProduct";
import AddDiscount from "./Components/Discount/AddDiscount";
import UpdateDiscount from "./Components/Discount/UpdateDiscount";
import AddReorder from "./Components/Reorder/AddReorder";
import UpdateReorder from "./Components/Reorder/UpdateReorder";
import ProductDashboard from "./Components/Products/ProductDashboard";


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
          <Route path="/Petprofile/:microchipId" element={<Petprofile />} />
          
          <Route path="/pdashboard" element={<ProductDashboard />} />
          <Route path="/displayproduct" element={<Displayproduct />} />

          <Route path="/displaydiscount" element={<DisplayDiscount />} />
          <Route path="/report" element={<Report />} />
          <Route path="/displayreorder" element={<DisplayReorder />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/displayproduct/:id" element={<UpdateProduct />} />

          <Route path="/adddiscount" element={<AddDiscount />} />
          <Route path="/displaydiscount/:id" element={<UpdateDiscount />} />
          <Route path="/addreorder" element={<AddReorder />} />
          <Route path="/displayreorder/:id" element={<UpdateReorder />} />
          
          {/* Route for UserDashboard with props */}
          <Route
            path="/UserDashboard"
            element={<UserDashboard email={window.history.state?.email} />}
          />
          <Route
            path="/Petprofile"
            element={
              <Petprofile microchipId={window.history.state?.microchipId} />
            }
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
