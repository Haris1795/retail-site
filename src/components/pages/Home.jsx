import React from 'react';
import image from '../layout/assets/stock.jpeg'
import {Link} from 'react-router-dom';
function Home() {

  return <div className="flex flex-row justify-around h-screen">
      <div className="flex flex-col ">
        <h1 className="text-9xl text-sky-600">Welcome</h1>
        <h2>Let's Create Your Own Style</h2>
        <h4>Sign up and earn your place in theafbaobjfolahgpiehwpfinasdbovbn</h4>
        <Link to="/men">
        <button className="btn btn-wide btn-lg">SHOP NOW</button> 
        </Link>
      </div>
      <div>
        <img className="rounded-lg shadow-lg w-4/5"src={image} alt="Promo"/>
      </div>
  </div>;
  

}

export default Home;
