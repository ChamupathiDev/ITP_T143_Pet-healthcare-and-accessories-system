import React from 'react';
import { Route,Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import AddDelivery from "./Components/AddDelivery/AddDelivery";

import UpdateDelivery from "./Components/UpdateDelivery/UpdateDelivery";
import DelTrack from './Components/Tracking/Tracking';
import DeliveryManagerUpdate from './Components/DeliveryManagerUpdate/DeliveryTrackingUpdate';

import DeliveryTrackingAdd from './Components/DeliveryManagerAdd/DeliveryTrackingAdd';
import AllTracking from './Components/AllTracking/AllTracking';
import DeliveryDetails from './Components/DeliveryDetails/DeliveryDetails';
import AllRequest from './Components/AllRequest/AllRequest';

import SendPdf from "./Components/SendPdf/SendPdf";
import DelProgressChart from './Components/ChartDel/DelProgressChart';
import CustomerView from './Components/CustomerView/CustomerView';
import AllDelay from './Components/AllDelay/AllDelay';
import UpdateDelay from './Components/UpdateDelay/UpdateDelay';
import AddDelayForm from "./Components/AddDelayForm/AddDelayForm";
import Mainpage from "./Components/Mainpage/Mainpage";
import DeliveryDashboard from './Components/DeliveryDashboard/DeliveryDashboard';



function App() {
  return (
    <div>
      
      
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mainhome" element={<Home/>}></Route>
          <Route path="/adddelivery" element={<AddDelivery/>}></Route>
          <Route path="/deliverydetails" element={<DeliveryDetails/>}></Route>
          <Route path="/deliverydetails/:id" element={<UpdateDelivery/>}></Route>
          <Route path="/trackingupdate" element={<DelTrack/>}></Route>
          <Route path="/trackingdetails/:id" element={<DeliveryManagerUpdate/>}></Route>
          <Route path="/CustomerView" element={<CustomerView/>}></Route>
          <Route path="/addtracking" element={<DeliveryTrackingAdd/>}></Route>
          <Route path="/trackingdetails" element={<AllTracking/>}></Route>
          <Route path="/requestdetails" element={<AllRequest/>}></Route>
          
          <Route path="/sendpdf" element={<SendPdf/>}></Route>
          <Route path="/deliverychart" element={<DelProgressChart/>}></Route>
          <Route path="/customerview" element={<CustomerView/>}></Route>
          <Route path="/delaydetails" element={<AllDelay/>}></Route>
          <Route path="/delaydetails/:id" element={<UpdateDelay/>}></Route>
          <Route path="/adddelayform" element={<AddDelayForm/>}></Route>
          <Route path="/mainpage" element={<Mainpage/>}></Route>
          <Route path="/deldashbord" element={<DeliveryDashboard/>}></Route>







        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;