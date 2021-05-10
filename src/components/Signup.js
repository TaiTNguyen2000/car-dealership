import React, { useState } from 'react';
import './styles/Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { login } from '../features/userSlice';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert('Please enter a first name!');
    }
    if (!lName) {
      return alert('Please enter a last name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
            history.push('/account');
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='signup'>
      <div className='signup__container'>
        <h1>Create An Account</h1>
        <form className='signup__form'>
          <label htmlFor='fName'>First Name</label>
          <input
            id='fName'
            type='text'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor='lName'>Last Name</label>
          <input
            id='lName'
            type='text'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name='Create Account' type='submit' onClick={signUp} />
        </form>
        <div className='signup__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/login'>
          <ButtonSecondary name='Sign In' />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
