import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({data}) => {
  return (
    <div className="col-md-3 m-5 card p-2" >

<div >
    <Link to={`product/${data.id}`}>
    <img src={data.image} className="img-fluid" alt="" />
            <h1>{data.name}</h1>

            <p>Rating:{data.rating}</p>
            <p>Price: {data.price}</p>
    </Link>
            
          </div>

    </div>
  )
}

export default Product