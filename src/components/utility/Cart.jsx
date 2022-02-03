/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useContext} from 'react';
import Table from './Table';
import ProductContext from '../context/ProductContext';

function Cart() {
    const { cartList } = useContext(ProductContext)
    if(cartList.length < 2){
        return (
            <div className="text-center text-base-300 text-3xl p-8 flex flex-row" >
                <p>Your Cart is empty</p>
            </div>
        )
    }

  return cartList.map((item, index) => (
    <>
        <li className=''>
            <Table info={item} key={index}/>
        </li>
    </>
  ))
}

export default Cart;
