import React from 'react'
import Nav from '../Nav/Nav'
import Sidebar from "../Sidebar/Sidebar";

function DisplayPromotion() {
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
        <div className='font-bold text-lg pl-2'>Promotion</div>
      </div>
    </section>
      
    </React.Fragment>
    
  )
}

export default DisplayPromotion
