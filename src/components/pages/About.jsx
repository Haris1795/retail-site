import React from 'react';
import { FaGithub } from 'react-icons/fa'
import {Link} from 'react-router-dom';

function About() {
  return (
    <>
      <div className='px-5 h-screen'>
          <h1 className="text-6xl mb-4">Fake Shoping website</h1>
          <p className="mb-4 text-2xl font-light">
              A react app that mimics a real retail website. This project was created for learning purposes.
          </p>
          <p>
            <strong>By Haris Sultanic</strong>
          </p>    
          <p className="text-lg text-gray-400">
            Version: <span className="text-black">1.0.0</span>
          </p>
      </div>
      <Link to="https://github.com/Vikapod/retail-site">
        <FaGithub className="text-9xl mb-150" />
      </Link>
    </>
  )
}

export default About;
