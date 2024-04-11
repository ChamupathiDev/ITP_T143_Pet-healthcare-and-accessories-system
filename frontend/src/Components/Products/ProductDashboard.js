import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";


function ProductDashboard() {
  
  return (
    <React.Fragment>
      <section>
        <Nav/>
      </section>

      <section className="pl-64 pt-20 overflow-x-auto">
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0">
            <Sidebar />
          </div>

          <div className="col-span-9 bg-white-500 h-screen md:col-span-10">
            <div className="font-bold text-2xl pl-2">Dashboard</div>
            <div>
              

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductDashboard;
