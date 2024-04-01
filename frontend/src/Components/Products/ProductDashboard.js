import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Sidepage from "../Sidebar/Sidepage";



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
       <div><Sidepage/></div>
      </div>
    </section>
      
    </React.Fragment>
  );
}

export default ProductDashboard;
