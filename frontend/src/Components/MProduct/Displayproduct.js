import React, {useEffect, useState} from 'react'
import Nav from '../Nav/Nav'
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Product from './Product';


const URL="http://Localhost:8070/products/getAll"

const fetchHandler = async () =>{
  return await axios.get(URL).then((res) => res.data);
}
function Displayproduct() {

const [products,setProducts] = useState();
useEffect(() => {
  fetchHandler().then((data) => setProducts(data.products));
}, [])

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
      <div className='font-bold text-lg pl-2'>product</div>
      <div>
        {products && products.map((product, i) =>(
          <div key={i}>
            <Product product={product}/>

            </div>

        
        )
        )}
      </div>
    </div>
  </section>
  
    
  </React.Fragment>
  )
}

export default Displayproduct
