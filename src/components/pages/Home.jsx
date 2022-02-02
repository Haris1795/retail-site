import React from 'react';
import image from '../layout/assets/stock.jpeg'

function Home() {

  return <div className="flex flex-row justify-evenly h-screen">
      <div className="flex flex-col ">
        <h1 className="text-6xl text-sky-400">Welcome</h1>
        <h2>Let's Create Your Own Style</h2>
        <h4>Sign up and earn your place in theafbaobjfolahgpiehwpfinasdbovbn</h4>
      </div>
      <div>
        <img className="rounded-lg shadow-lg w-4/5"src={image} alt="" srcset="" />
      </div>
  </div>;
  

}

export default Home;
