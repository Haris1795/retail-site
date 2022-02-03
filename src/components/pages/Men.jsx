import React from 'react';
import Card from '../utility/Card';
import PageSelect from '../utility/PageSelect';

function Men() {
  return ( 
    <>
      <div className='flex justify-between  flex-direction-row flex-wrap mx-auto '>
        <Card text='men'/>
      </div>
      <PageSelect />
    </>
  )
}

export default Men;