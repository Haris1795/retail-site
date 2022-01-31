import React from 'react';
import Card from '../utility/Card';

function Men() {
  console.log(<Card />)
  return <div>
    <Card 
    img="https://picsum.photos/id/1005/400/250"
    description='Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.'
    newest={true}
    title='Addidas Tshirt'
    />
  </div>;
}

export default Men;