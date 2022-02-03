import React from 'react';
import { useContext } from 'react'
import ProductContext from '../context/ProductContext';

function Table(prop) {
    const { cartList, handleClick } = useContext(ProductContext)
    if(prop.info.id === undefined){
        return null
    }
  return (
      <>
          <div className="grid grid-cols-4 grid-rows-1 justify-items-center m-1  border z-0">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle mask-border-4 mt-3">
                <img className='bg-neutral' src={prop.info.img} alt="Article"/>
              </div>
            </div> 
            <div className=''>
                <div className="font-bold text-neutral m-3">
                    {prop.info.title}
                </div> 
            </div>
            <div className='text-neutral m-3'>{prop.info.price}$</div> 
            <div className='mt-5'>
                    <button onClick={()=>{handleClick(prop.info.id)}}className="btn btn-outline btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">   
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>                       
                        </svg>
                    </button> 
            </div>
          </div>
        </>
  )
}

export default Table;
