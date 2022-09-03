import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import actions from '../actions/index';
import CodeLeapLogo from '../assets/codeleap-logo.png';
import './style.signup.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();

  const { user, isButtonDisabled } = state;

  useEffect(() => {
    if (isButtonDisabled === true && user.length > 0) {
      dispatch(actions.userAction.toggleButton(false));
    }
    if (isButtonDisabled === false && user.length < 1) {
      dispatch(actions.userAction.toggleButton(true));
    }
  }, [isButtonDisabled, user, dispatch]);

  const handleClick = () => navigate('/home');

  const handleInput = (event) => {
    const { value } = event.target;
    dispatch(actions.userAction.createUser(value));
  };

  return (
    <section className="sign-up-section">
      <img src={CodeLeapLogo} alt='CoadLeap Logo' />
      <div className="sign-up-modal">
        <h1>Welcome to CodeLeap network!</h1>
        <label className="sign-up-label" htmlFor="username-input">
          <span>Please enter your username</span>
          <input
            id="username-input"
            type="text"
            placeholder="John Doe"
            onChange={handleInput}
            value={user}
          />
        </label>
        <button
          type="button"
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          ENTER
        </button>
      </div>
    </section>
  );
}

export default SignUp;
