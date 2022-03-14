import React from 'react';
import image from '../layout/assets/stock.jpeg'
import {Link} from 'react-router-dom';
function Home() {

  return <div className="flex flex-row justify-between h-screen">
      <div className="flex flex-col ">
        <h1 className="text-9xl text-secondary-focus">Welcome</h1>
        <h2 className='mt-4 text-4xl w-64'>Let's Create Your Own Style</h2>
        <h4 className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        <Link to="/men">
        <button className=" m-12 btn btn-wide btn-lg">SHOP NOW</button> 
        </Link>
      </div>
      <div>
        <img className="m-10 rounded-lg shadow-lg w-11/12"src={image} alt="Promo"/>
      </div>
  </div>;
  

}

export default Home;
