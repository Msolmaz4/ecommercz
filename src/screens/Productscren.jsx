import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

const Productscren = () => {

    const {id} =useParams();

    const elemen =data.find(elemen => elemen.id == id)
 
    
  return (
    <div>Productscren


        <h1> product id ={id} </h1>
        
        <h1>{elemen.name}</h1>
    </div>
  )
}

export default Productscren