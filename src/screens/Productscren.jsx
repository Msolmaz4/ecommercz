import React from 'react'
import data from '../data'
const Productscren = ({match}) => {

    const productId =match.params.id
  return (
    <div>Productscren


        <h1> product id = {productId}</h1>
    </div>
  )
}

export default Productscren