import React from 'react';
import Card from '../utility/Card';
import {useContext} from 'react';
import ProductContext from '../context/ProductContext'
import PageSelect from '../utility/PageSelect';

function Men() {
  const { product } = useContext(ProductContext)
  return ( 
    <>
      <div className='flex justify-evenly  flex-direction-row flex-wrap mx-auto '>
        <Card />
        <PageSelect />
      </div>

    </>
  )
}

export default Men;