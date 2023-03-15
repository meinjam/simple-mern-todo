import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className='bg-primary text-white sticky top-0 z-50 py-6'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <h1 className='text-4xl'>React Tailwind Starter</h1>
          </Link>

          <ul className='flex items-center gap-x-24' id='hamburg_menu'>
            <li>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
