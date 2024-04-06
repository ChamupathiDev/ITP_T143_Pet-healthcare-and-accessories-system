import { Route,Routes } from 'react-router';
import './App.css';
import ProductDashboard from './Components/Products/ProductDashboard';
import React from 'react'
import Displayproduct from './Components/MProduct/Displayproduct';
import DisplayPromotion from './Components/Promotions/DisplayPromotion';
import DisplayDiscount from './Components/Discount/DisplayDiscount';
import Report from './Components/Report/Report';
import DisplayReorder from './Components/Reorder/DisplayReorder';
import AddProduct from './Components/MProduct/AddProduct';
import UpdateProduct from './Components/MProduct/UpdateProduct';
import AddPromotion from './Components/Promotions/AddPromotion';
import UpdatePromotion from './Components/Promotions/UpdatePromotion';
import AddDiscount from './Components/Discount/AddDiscount';
import UpdateDiscount from './Components/Discount/UpdateDiscount';
import AddReorder from './Components/Reorder/AddReorder';
import UpdateReorder from './Components/Reorder/UpdateReorder';



function App() {
  return (
    <React.Fragment>
     <section>
     <Routes>
        <Route path="/" element={<ProductDashboard/>}/>
        <Route path="/pdashboard" element={<ProductDashboard/>}/>
        <Route path="/displayproduct" element={<Displayproduct/>}/>
        <Route path="/displaypromotion" element={<DisplayPromotion/>}/>
        <Route path="/displaydiscount" element={<DisplayDiscount/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/displayreorder" element={<DisplayReorder/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/displayproduct/:id" element={<UpdateProduct/>}/>
        <Route path="/addpromotion" element={<AddPromotion/>}/>
        <Route path="/displaypromotion/:id" element={<UpdatePromotion/>}/>
        <Route path="/adddiscount" element={<AddDiscount/>}/>
        <Route path="/displaydiscount/:id" element={<UpdateDiscount/>}/>
        <Route path="/addreorder" element={<AddReorder/>}/>
        <Route path="/displayreorder/:id" element={<UpdateReorder/>}/>



      </Routes>
     </section>
     
      
      
      

      </React.Fragment>
  );
}

export default App;
