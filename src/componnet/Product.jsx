import React from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'


const Product = ({data}) => {
  return (
    <div className="col-md-3 m-5 card p-2" >

<div >
    <Link to={`product/${data.id}`}>
    <img src={data.image} className="img-fluid" alt="" />
            <h1>{data.name}</h1>

 
            <Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
/>

 

       <p>Price: {data.price}</p>
    </Link>
            
          </div>

    </div>
  )
}

export default Product