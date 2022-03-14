import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Children from './components/pages/Children';
import { ProductProvider } from './components/context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className='flex flex-col justify-between' >
          <Navbar />

          <main className='container h-auto m-auto px-5 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/men' element={<Men />} />
              <Route path='/women' element={<Women />} />
              <Route path='/children' element={<Children />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Link to='/about'>
            <FaQuestionCircle className='text-3xl circle-div'/>
          </Link>

          <Footer />
        </div>
      </Router>
    </ProductProvider> 
  )
}

export default App;