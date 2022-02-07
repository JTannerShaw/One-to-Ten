import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import FormInput from '../Forms/FormInput/FormInput';
import Lorem from '../Lorem/Lorem';
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
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className='login-form' id='flex__container--split'>
      <div className='light_background' />
      {/* <div id='flex__container--divider'/> */}
      <div className='left_col flex__container--child login'>
        <h1>Log In</h1>
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
      <div className='right_col flex__container--child login'>
        <div className='top_group'>
          <p className='p-1'>
            {/* <Lorem chars='200' /> */}
            Log in to answer questions,
            change your responses, and view your compatibility with
            other users. You may demo the site via <button className='p-1 underline-slide main-color' onClick={demoLogin}> this link </button>.
            If you do not have an account, you can <NavLink to='/sign-up' className='main-color underline-slide'>sign up here</NavLink>.

          </p>
        </div>

        <div className='bottom_group'>
          <div className="error-area">
            {errors && errors.map(error => (
              <div className="database-errors">
                {error.split(":")[1]}
              </div>
            ))
            }
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
  );
};

export default LoginForm;
