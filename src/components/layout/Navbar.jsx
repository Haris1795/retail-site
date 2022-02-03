/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { FaLyft} from 'react-icons/fa';
import {FaShoppingCart } from 'react-icons/fa'
import Cart from '../utility/Cart'
import CartIndicator from '../utility/CartIndicator'

function Navbar(title) {
  return <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
    <div className="container mx-auto">
      <div className="flex-none px-2 mx-2">
        <FaLyft className='inline pr-2 text-3xl' />
        <Link to='/' className='text-lg font-bold align-middle'>Lyft Clothing Store</Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-space-around ">
          <Link to='/men' className='btn btn-ghost btn-sm rounded-btn'>Men</Link>
          <Link to='/women' className='btn btn-ghost btn-sm rounded-btn'>Women</Link>  
          <Link to='/children' className='btn btn-ghost btn-sm rounded-btn'>Children</Link>
        </div>
      </div>
      <div class="indicator">
        <div class="indicator-item indicator-bottom indicator-end badge  badge-secondary mb-2 ">
            <CartIndicator />
          </div> 
        <div class="grid w-34 h-34 place-items-center">
          <div className="dropdown dropdown-end">
            <div tabIndex="0" className="m-1 btn">
                <FaShoppingCart className='inline pr-2 text-5xl'/>
            </div> 
            <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-96 flex">
                <Cart />
                <button className="btn btn-md w-64 mx-auto bg-secondary hover:bg-sky-700">PROCEED TO CHECKOUT</button> 
            </ul>
            </div>
        </div>
      </div>
    </div>
  </nav>
}

Navbar.defaultProps = {
  title: 'Fake Shop',
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar;
