import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
// import { uiReducer } from '../reducers/uiReducer';
// import { types } from '../../types/types';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {
    ui: { msgError },
  } = useSelector((state) => state);
  const [values, handleInputChange, reset] = useForm({
    name: 'jose',
    password: '123456',
    password2: '123456',
    email: 'mail@mail.com',
  });
  const { name, password, password2, email } = values;
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('name too short'));

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(dispatch(setError('not valid email')));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('password must be at least 5 characters'));

      return false;
    }
    dispatch(removeError());
    return true;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
    // Object.entries(values).forEach(({ name, value }) => {
    //   console.log(`${name} : ${value}`);
    // });
  };
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className='auth__alert-error'>{msgError}</div>}
        {/* <div className='auth__alert-error'>Hola Mundo</div> */}
        <input
          onChange={handleInputChange}
          className='auth__input'
          type='text'
          placeholder='name'
          name='name'
          defaultValue={name}
        />
        <input
          onChange={handleInputChange}
          className='auth__input'
          type='text'
          placeholder='email'
          name='email'
          defaultValue={email}
        />
        <input
          onChange={handleInputChange}
          className='auth__input'
          type='password'
          placeholder='password'
          name='password'
          defaultValue={password}
        />
        <input
          onChange={handleInputChange}
          className='auth__input'
          type='password'
          placeholder='confirm password'
          name='password2'
          defaultValue={password2}
        />
        <button type='submit' className='btn btn-primary btn-block'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already registered ?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
