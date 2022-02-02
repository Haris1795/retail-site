import React from 'react';
import {useContext} from 'react';
import ProductContext from '../context/ProductContext'
import Spinner from '../layout/Spinner';

function Card(props) {
  const { product } = useContext(ProductContext)
  if (!product){
    return (
      <Spinner />
    )
  }
  const [ productSpec ] = product

  return productSpec[props.text].map((item) => (
    <div className=" flex card card-bordered w-64 my-6" key={item.id}>
        <figure>
            <img src={item.img} alt='clothing'/>
        </figure> 
    <div className="card-body bg-slate-100" key={item.id}>
      <div className="flex flex-row items-center">
        <h3 className="card-title">{item.title}</h3>
            <div className="badge mx-2 badge-lg badge-secondary rounded-full w-16 h-16">
              <div className="flex flex-column">
                <h4 className=''><strong>{item.price}$</strong></h4>
              </div>
            </div>
      </div>
        <p>{item.description}</p> 
        <div className="flex flex-row card-actions">
          <button className="btn btn-secondary shrink">Add to Shoping Cart</button>
        </div>
    </div>
    </div> 

  ))
}


export default Card;