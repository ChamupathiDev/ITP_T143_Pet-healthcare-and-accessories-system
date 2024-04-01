import React from "react";
import Nav from "../Nav/Nav";
import sideBar from "../sideBar/sideBar";


function ProductDashboard() {
  return (
    <React.Fragment>
      <section>
        <div>
          <Nav />
        </div>
      </section>

      <section>
        <div>
          <sideBar />

        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductDashboard;
