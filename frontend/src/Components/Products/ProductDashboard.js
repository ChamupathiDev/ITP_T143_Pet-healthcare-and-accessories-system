import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";






function ProductDashboard() {
  return (
    <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section>
      <div className='grid grid-cols-12' >
        <div className='col-span-2 bg-customBlue h-screen pl-2'>
          <Sidebar/>
        </div>
        <div className='font-bold text-2xl pl-2'>Dashboard</div>
      </div>
    </section>
      
    </React.Fragment>
  );
}

export default ProductDashboard;
