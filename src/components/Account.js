import React from 'react';
import './styles/Account.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import Car from './Car';
import { auth } from '../firebase';

function Account({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='Account'>
      <div className='Account__header'>
        <div className='Account__logo'>
          <Link to='/'>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt=''
            />
          </Link>
        </div>
        <div className='Account__links'>
          <Link onClick={logoutOfApp}>Log out</Link>
        </div>
      </div>
      <div className='Account__person'>
        <h4>Welcome {user?.displayName}</h4>
      </div>
      <h4>Your Cars</h4>
      <div className='Account__car'>
        <Car imgSrc='/images/modela.jpg' model='model a' />
        <Car imgSrc='/images/modelb.png' model='model b' />
      </div>
    </div>
  );
}

export default Account;
