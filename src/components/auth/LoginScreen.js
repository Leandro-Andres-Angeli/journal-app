import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {
  // login,
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {
    ui: { loading },
  } = useSelector((state) => state);
  const [formValues, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };
  const handleGoogleLogin = () => {
    console.log('on');
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form
        onSubmit={handleLogin}
        className='animate__animated animate__fadeIn '
      >
        <input
          className='auth__input'
          type='text'
          placeholder='email'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          disabled={loading}
          className='btn btn-primary btn-block'
        >
          Login
        </button>

        <div onClick={handleGoogleLogin} className='google-btn' role='button'>
          <div className='google-icon-wrapper'>
            <img
              className='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google button'
            />
          </div>
          <p className='btn-text'>
            <b>Sign in with google</b>
          </p>
        </div>
        {/* <div className='google-btn'>
          <div className='google-icon-wrapper'>
            <img
              className='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google button'
            />
          </div>
          <div className='google-btn'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div> */}
        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
