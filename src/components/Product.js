import React from 'react';
import './styles/Product.css';

function Product() {
  return (
    <div className='product'>
      <video autoPlay playsInline muted loop className='product__video'>
        <source src='/videos/ModelA.mp4' type='video/mp4' />
      </video>
      <div className='product__info'>
        <div className='product__infoText'>
          <h1>Model A</h1>
          <h4>
            The Epitome Of <span>Masterclass</span>
          </h4>
        </div>
        <div className='product__actions'>
          <button className='product__buttonPrimary'>custom order</button>
          <button className='product__buttonSecondary'>buy used cars</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
