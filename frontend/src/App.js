import { Route,Routes } from 'react-router';
import './App.css';
import ProductDashboard from './Components/Products/ProductDashboard';
import React from 'react'
import Displayproduct from './Components/MProduct/Displayproduct';
import DisplayPromotion from './Components/Promotions/DisplayPromotion';
import Discount from './Components/Discount/Discount';
import Report from './Components/Report/Report';
import Reorder from './Components/Reorder/Reorder';
import AddProduct from './Components/MProduct/AddProduct';
import UpdateProduct from './Components/MProduct/UpdateProduct';




function App() {
  return (
    <React.Fragment>
     <section>
     <Routes>
        <Route path="/" element={<ProductDashboard/>}/>
        <Route path="/pdashboard" element={<ProductDashboard/>}/>
        <Route path="/displayproduct" element={<Displayproduct/>}/>
        <Route path="/displaypromotion" element={<DisplayPromotion/>}/>
        <Route path="/discount" element={<Discount/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/reorder" element={<Reorder/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/displayproduct/:id" element={<UpdateProduct/>}/>



      </Routes>
     </section>
     
      
      
      

      </React.Fragment>
  );
}

export default App;
