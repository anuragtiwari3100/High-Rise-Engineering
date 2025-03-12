import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>
        {/* Logo and Description */}
        <div className='w-full md:w-1/3'>
          <Link to='/'>
            <img
              src={assets.logo}
              alt='High Rise Engineering'
              className='w-16 h-16 object-cover rounded-full border-2 border-x-blue-950'
            />
          </Link>
          <p className='text-gray-400 mt-4'>
            High Rise Engineering is a premier construction firm specializing in Refinary projects since 2024"
          </p>
        </div>

        {/* Company Links */}
        <div className='w-full md:w-1/5'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li className='hover:text-white'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-white'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='hover:text-white'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='w-full md:w-1/5'>
          <h3 className='text-white text-lg font-bold mb-4'>Quick Links</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li className='hover:text-white'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='hover:text-white'>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Social Media Links */}
      <div className='flex justify-center mt-10 gap-4'>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-2xl'
        >
          <FaFacebook />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-2xl'
        >
          <FaTwitter />
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-2xl'
        >
          <FaInstagram />
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-2xl'
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright © 2024 High Rise Engineering. | Developed by <a
          href='https://linkedin.com/in/anurag-tiwari-620b76262'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-base sm:text-lg'
        >
          Anurag
        </a> &
        <a
          href='https://linkedin.com/in/nishar-alam-bab812211'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white text-base sm:text-lg'
        >
          Nishar
        </a>.
      </div>
    </div>
  );
};

export default Footer;