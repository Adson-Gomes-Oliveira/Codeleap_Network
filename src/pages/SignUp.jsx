import React from 'react';

const SignUp = () => {
  return (
    <section className="sing-up-section">
      <div>
        <h1>Welcome to CodeLeap network!</h1>
        <label for="username-input">
          <span>Please enter your username</span>
          <input type="text" placeholder="John Doe" />
        </label>
      </div>
    </section>
  );
}

export default SignUp;
