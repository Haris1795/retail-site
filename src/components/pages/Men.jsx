import React from 'react';
import Card from '../utility/Card';
import {useContext} from 'react';
import ProductContext from '../context/ProductContext'

function Men() {
  const { product } = useContext(ProductContext)
  return <div>
    <Card />
  </div>;
}

export default Men;