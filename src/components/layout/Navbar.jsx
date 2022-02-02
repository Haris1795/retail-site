/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { FaLyft} from 'react-icons/fa';
import {FaShoppingCart } from 'react-icons/fa'

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
      <div className="flex-2 px-2 mx-2">
        <div className="flex justify-end">
          <Link to='/checkout' className=''>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" className="btn btn-ghost rounded-btn">
              <FaShoppingCart className='inline pr-2 text-5xl'/>
            </div>
            <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-96">
          <li>
            <a>Item 1</a>
          </li> 
          <li>
            <a>Item 2</a>
          </li> 
          <li>
            <a>Item 3</a>
          </li>
        </ul>
          </div>
          </Link>
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
