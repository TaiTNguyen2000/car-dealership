import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img className='header__logoImg' src='/images/logo.png' alt='' />
        </Link>
      </div>
      <div className='header__links'>
        <Link to='/'>Model A</Link>
        <Link to='/'>Model B</Link>
        <Link to='/'>Model C</Link>
        <Link to='/'>Model D</Link>
        <Link to='/'>Model E</Link>
      </div>
      <div className='header__right'>
        <Link to='/login'>Your Account</Link>
      </div>

      <div
        className='header__menu'
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
}

export default Header;
