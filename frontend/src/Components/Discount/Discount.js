import React from 'react'
import Nav from '../Nav/Nav'
import Sidebar from "../Sidebar/Sidebar";

function Discount() {
  return (
<React.Fragment>
    <section>
      <div>
        <Nav />
      </div>
    </section>

    <section className="pl-64 pt-20 overflow-x-auto">
    <div className='grid grid-cols-10' >
      <div className='col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0'>
        <Sidebar/>
      </div>
      <div className='font-bold text-lg pl-2'>Discount</div>
    </div>
  </section>
    
  </React.Fragment>
  )
}

export default Discount
