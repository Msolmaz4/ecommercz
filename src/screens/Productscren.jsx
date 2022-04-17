import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

const Productscren = () => {

    const {id} =useParams();

    const elemen =data.find(elemen => elemen.id == id)
 
    
  return (
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card p-2 m-2'>
                    <h1>{elemen.name}</h1>
                    <img src={elemen.image} className='img-fluid m-3 bigimg' alt=''/>
                    <p>{elemen.description}</p>

                </div>


            </div>
            <div className='col-md-6' text='left'>
                <div className='m-2'>
                    <h1>Price: {elemen.price}</h1>
                    <hr/>
                    <h1>Select Quantity</h1>
                    <select>
                    {[...Array(elemen.countInStock).keys()].map((x,i)=>{
                        <option value={i+1}>{i+1}</option>
                    })}
                    </select>
                    <hr/>
                    <button className='btn btn-dark'>ADD TO CART</button>
                   



                </div>
            </div>

        </div>

        
        
        
    </div>
  )
}

export default Productscren