import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './styles/Car.css';

function Car({ imgSrc, model, testDrive }) {
  return (
    <div className='car'>
      <div className='car__image'>
        <img src={imgSrc} alt='' />
      </div>
      <h2 className='car__model'>{model}</h2>
      <div className='car__actions'>
        <ButtonPrimary name='Schedule Service Appointment' />
        <ButtonSecondary name='Place For Sale' />
      </div>
    </div>
  );
}

export default Car;
