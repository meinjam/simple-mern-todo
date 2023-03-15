import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-text-gray'>
      <div className='container'>
        <hr />
        <div className='grid grid-row-2 md:grid-cols-2 gap-6 lg:gap-12 2xl:gap-24 items-center py-6'>
          <div>
            © <span id='current_year'>2023</span> Am-system™. All Rights Reserved.
          </div>
          <div className='flex gap-12 justify-start md:justify-end items-center'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/about'>
              About
            </Link>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
