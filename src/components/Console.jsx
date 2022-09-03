import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Console = () => {
  // const dispatch = useDispatch();
  const store = useSelector((state) => state);
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (isButtonDisabled === true && user.length > 0) {
  //     dispatch(toggleButton(false));
  //   }
  //   if (isButtonDisabled === false && user.length < 1) {
  //     dispatch(toggleButton(true));
  //   }
  // }, [isButtonDisabled, user, dispatch]);

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   dispatch(createPost());
  // }

  const handleClick = () => {

  };

  return (
    <section className="console">
      <h2>What's on your mind?</h2>
      <form className="post-form">
        <label htmlFor="title-input">
          <span>Title</span>
          <input
            id="title-input"
            type="text"
            placeholder="Hello world"
            // onChange={handleChange}
            // value={store}
          />
        </label>
        <label htmlFor="content-area">
          <span>Content</span>
          <textarea
            id="content-area"
            placeholder="Hello world"
            rows="5"
            // onChange={handleChange}
            // value={store}
          />
        </label>
      </form>
      <button
        type="button"
        disabled={store}
        onClick={handleClick}
      >
        CREATE
      </button>
    </section>
  )
};

export default Console;
