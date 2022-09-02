import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createUser, toggleButton } from '../actions/index';
import './style.signup.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();

  const { user, isButtonDisabled } = state;

  useEffect(() => {
    if (isButtonDisabled === true && user.length > 0) {
      dispatch(toggleButton(false));
    }
    if (isButtonDisabled === false && user.length < 1) {
      dispatch(toggleButton(true));
    }
  }, [isButtonDisabled, user, dispatch]);

  const handleClick = () => navigate('/home');

  const handleInput = (event) => {
    const { value } = event.target;
    dispatch(createUser(value));
  };

  return (
    <section className="sign-up-section">
      <div className="sign-up-modal">
        <h1>Welcome to CodeLeap network!</h1>
        <label className="sign-up-label" htmlFor="username-input">
          <span>Please enter your username</span>
          <input
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
