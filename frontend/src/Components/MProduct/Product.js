import React from 'react'

function Product(props) {
    const {_id,name, description, price, stockAlertThreshold, reorderPoint, imageUrl, category}= props.product;
  return (
    <div>
      <h1>product details</h1>
      <br></br>

      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Description:{description}</h1>
      <h1>Price:{price}</h1>
      <h1>StockAlertThreshold:{stockAlertThreshold}</h1>
      <h1>ReorderPoint:{reorderPoint}</h1>
      <h1>ImageUrl:{imageUrl}</h1>
      <h1>Category:{category}</h1>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Product
