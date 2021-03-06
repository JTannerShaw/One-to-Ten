import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import FormInput from '../Forms/FormInput/FormInput';
import './Login.css'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationObject, setValidationObject] = useState({ test: true });
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };


  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('test7@test.com', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='light_background' />
      <div className='login-form' id='flex__container--split'>
        {/* <div id='flex__container--divider'/> */}
        <div className='flex__container--child flex__container--padded'>
          <h1>Log In</h1>
          <p className='p-1'>
            {/* <Lorem chars='200' /> */}
            Log in to answer questions,
            change your responses, and view your compatibility with
            other users. You may demo the site via <button className='p-1 underline-slide main-color' onClick={demoLogin}> this link </button>.
            If you do not have an account, you can <NavLink to='/signup' className='main-color underline-slide'>sign up here</NavLink>.

          </p>

        </div>
        <div className='flex__container--child flex__container--padded'>
          <div className='top_group'>
            <form id='login' onSubmit={onLogin}>
              <FormInput
                labelText='Email'
                id='email'
                type='text'
                stateVar={email}
                setStateVar={setEmail}
                maxLength={60}
                required={true}
                restrictSafe={true}
                placeholder={``}
                validationObject={validationObject}
                setValidationObject={setValidationObject}
              />
              <FormInput
                labelText='Password'
                id='password'
                type='password'
                stateVar={password}
                setStateVar={setPassword}
                required={true}
                restrictSafe={false}
                placeholder={``}
                validationObject={validationObject}
                setValidationObject={setValidationObject}
              />
            </form>
          </div>


          <div className='bottom_group'>
            <div className="error-area">
              {errors && errors.map(error => (
                <div className="database-errors">
                  {error.includes(': ') ?
                    error.split(": ")[1]
                    : error
                  }
                </div>
              ))}
            </div>
            <ArrowButton
              type='submit'
              formId='login'
              validationObject={validationObject}
            >
              Submit
            </ArrowButton>

            {/* <ArrowButton
              validationObject={validationObject}
              onClickFunction={demoLogin}
            >
              Demo As Guest
            </ArrowButton> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
