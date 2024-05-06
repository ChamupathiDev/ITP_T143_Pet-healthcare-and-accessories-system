import { Route,Routes } from 'react-router';
import './App.css';
import ProductDashboard from './Components/Products/ProductDashboard';
import React from 'react'
import Displayproduct from './Components/MProduct/Displayproduct';
import DisplayDiscount from './Components/Discount/DisplayDiscount';
import Report from './Components/Report/Report';
import DisplayReorder from './Components/Reorder/DisplayReorder';
import AddProduct from './Components/MProduct/AddProduct';
import UpdateProduct from './Components/MProduct/UpdateProduct';
import AddDiscount from './Components/Discount/AddDiscount';
import UpdateDiscount from './Components/Discount/UpdateDiscount';
import AddReorder from './Components/Reorder/AddReorder';
import UpdateReorder from './Components/Reorder/UpdateReorder';
import UserProductCatalog from './Components/MProduct/UserProductCatalog';



function App() {
  return (
    <React.Fragment>
     <section>
     <Routes>
        <Route path="/" element={<ProductDashboard/>}/>
        <Route path="/pdashboard" element={<ProductDashboard/>}/>
        <Route path="/displayproduct" element={<Displayproduct/>}/>
        
        <Route path="/displaydiscount" element={<DisplayDiscount/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/displayreorder" element={<DisplayReorder/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/displayproduct/:id" element={<UpdateProduct/>}/>
        
        <Route path="/adddiscount" element={<AddDiscount/>}/>
        <Route path="/displaydiscount/:id" element={<UpdateDiscount/>}/>
        <Route path="/addreorder" element={<AddReorder/>}/>
        <Route path="/displayreorder/:id" element={<UpdateReorder/>}/>
        <Route path="/displaycatalog" element={<UserProductCatalog/>}/>



      </Routes>
     </section>
     
      
      
      

      </React.Fragment>
  );
}

export default App;
