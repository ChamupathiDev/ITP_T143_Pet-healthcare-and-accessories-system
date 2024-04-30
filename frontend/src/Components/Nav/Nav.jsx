import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";




function Nav  () {
    return (
    <div>
         <React.Fragment>
      <section>
        <div className= 'bg-customBlue h-20 w-full flex items-center justify-center fixed top-0 left-0'>
          <div>
            <h1 className=" font-Kanit font-bold text-white text-3xl">PetPulse</h1>
          </div>
          <div></div>
        </div>
      </section>
    <br></br>
<br></br><br></br><br></br>

        <ul className='home-ul'>
            
              
         
            <li className='home-ll'>
            <Link to="/customerview" className="active home-a">
                <h1>customer view</h1>
                </Link>
            </li>

            <li className='home-ll'>
            <Link to="/adddelayform" className="active home-a">
                <h1>Add Delay</h1>
                </Link>
            </li>


          
            <li className='home-ll'>
            <Link to="/mainpage" className="active home-a">
                <h1>main</h1>
                </Link>
            </li>

        </ul>
        <div></div>
        </React.Fragment>
    </div>
    )
}


export default Nav

