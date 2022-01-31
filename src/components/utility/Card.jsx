import React from 'react';
import {useContext} from 'react';
import ProductContext from '../context/ProductContext'
import Spinner from '../layout/Spinner';

function Card() {
  const { product } = useContext(ProductContext)
  const image = require('../layout/assets/men/jeans1.webp')

  if (!product){
    return (
      <Spinner />
    )
  }
  return (
    <div className="card card-bordered w-64">
        <figure>
            <img src={image}/>
        </figure> 
    <div className="card-body ">
      <div className="flex flex-row items-center">
        <h3 className="card-title">{product[0].title}</h3>
            <div className="badge mx-2 badge-lg badge-secondary rounded-full w-16 h-16">
              <div className="flex flex-column">
                <h4 className=''><strong>39.99$</strong></h4>
              </div>
            </div>
      </div>
        <p>{product[0].description}</p> 
        <div className="flex flex-row card-actions">
          <button className="btn btn-secondary shrink">Add to Shoping Cart</button>
        </div>
    </div>
    </div> 
  )
}


export default Card;