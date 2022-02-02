import React from 'react';
import Card from '../utility/Card';
import PageSelect from '../utility/PageSelect';

function Men() {
  return ( 
    <>
      <div className='flex justify-evenly  flex-direction-row flex-wrap mx-auto '>
        <Card text='men'/>
        <PageSelect />
      </div>

    </>
  )
}

export default Men;