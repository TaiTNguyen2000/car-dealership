import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Menu.css';

function Menu({ open }) {
  return (
    <div className={open ? 'menu open' : 'menu'}>
      <p>Models</p>
      <Link to='/'>Model A</Link>
      <Link to='/'>Model B</Link>
      <Link to='/'>Model C</Link>
      <Link to='/'>Model D</Link>
      <Link to='/'>Model E</Link>
      <Link to='/login'>Your Account</Link>
    </div>
  );
}

export default Menu;
