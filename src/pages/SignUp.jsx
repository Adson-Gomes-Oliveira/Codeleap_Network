import React from 'react';
import './style.signup.css';

const SignUp = () => {
  return (
    <section className="sign-up-section">
      <div className="sign-up-modal">
        <h1>Welcome to CodeLeap network!</h1>
        <label className="sign-up-label" for="username-input">
          <span>Please enter your username</span>
          <input type="text" placeholder="John Doe" />
        </label>
        <button type="button">ENTER</button>
      </div>
    </section>
  );
}

export default SignUp;
