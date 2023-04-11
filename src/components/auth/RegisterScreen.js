import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

const RegisterScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    name: 'jose',
    password: '123456',
    password2: '123456',
    email: 'mail@mail.com',
  });
  const { name, password, password2, email } = values;
  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('nombre requerido');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('not valid email');
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log('password must be at least 5 characters');
      return false;
    }
    return true;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('formulario correcto');
    }
    // Object.entries(values).forEach(({ name, value }) => {
    //   console.log(`${name} : ${value}`);
    // });
    console.log(values);
  };
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>
        <div className='auth__alert-error'>Hola Mundo</div>
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
