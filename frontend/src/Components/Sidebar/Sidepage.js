import React from 'react'
import { Route,Routes } from 'react-router-dom';
import ProductDashboard from './Components/Products/ProductDashboard';
import Displayproduct from './Components/MProduct/Displayproduct';
import DisplayPromotion from './Components/Promotions/DisplayPromotion';
import Discount from './Components/Discount/Discount';
import Report from './Components/Report/Report';
import Reorder from './Components/Reorder/Reorder';

function Sidepage() {
  return (
    <React.Fragment>
        <section>
        <Routes>
        <Route path="/" element={<ProductDashboard/>}/>
        <Route path="/pdashboard" element={<ProductDashboard/>}/>
        <Route path="/dispalyproduct" element={<Displayproduct/>}/>
        <Route path="/displaypromotion" element={<DisplayPromotion/>}/>
        <Route path="/discount" element={<Discount/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/reorder" element={<Reorder/>}/>
        



      </Routes>
        </section>
    </React.Fragment>
  )
}

export default Sidepage
