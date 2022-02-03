import React from 'react';
import { useContext } from 'react'
import ProductContext from '../context/ProductContext';

function CartIndicator() {
    const { cartList } = useContext(ProductContext)
    let indicator = 0
    if(cartList.length === 1){
        return null
    } else {
        indicator = cartList.length - 1
    }
  return (
      <span>{indicator}</span>
  )
}

export default CartIndicator;