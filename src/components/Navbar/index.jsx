import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

import "../Navbar/navbar.scss"
// import handleSearch from "../Products"
const Navbar = () => {
  const { handleSearch, search } = useContext(SearchContext);

  return (
    <div className='NavbarCont'>
      {/* {console.log(handleSearch)} */}
      <div className='Navbar'>
        <div className='NavbarOne'>
          <div>
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" />
          </div>
          <div className='Pages'>
            <Link to="/product">
              <div>Home</div>
            </Link>
            <div>Features</div>
            <div>Shop</div>
            <div>Blog</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className='icons'>

          <input className='inputNav' type="text" onChange={handleSearch} value={search} />
          <i class="fa-solid fa-magnifying-glass"></i>
          <Link to="/basket">
            <i class="fa-solid fa-basket-shopping"></i>
          </Link>
          <Link to="/wish">
            <i class="fa-solid fa-heart"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
