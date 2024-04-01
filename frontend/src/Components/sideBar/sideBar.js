import React from "react";
import { SidebarData } from "../../data/SidebarData";
import {NavLink} from "react-router-dom";

function sideBar() {
  return (
    <React.Fragment>
      <section>
        <div className="text-white">
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={item.path} className="hover:bg-red-500 pl-2 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                  </NavLink>
                </div>
               
            )
          })
          }
        </div>
      </section>
    </React.Fragment>
  );
}

export default sideBar;
