import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import actions from '../actions/index';

const Console = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homepageReducer);
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (isButtonDisabled === true && user.length > 0) {
  //     dispatch(toggleButton(false));
  //   }
  //   if (isButtonDisabled === false && user.length < 1) {
  //     dispatch(toggleButton(true));
  //   }
  // }, [isButtonDisabled, user, dispatch]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(state);
    const postInputState = {
      ...state,
      [id]: value,
    }

    dispatch(actions.postAction.storePostInputs(postInputState));
  }

  const handleClick = () => {

  };

  return (
    <section className="console">
      <h2>What's on your mind?</h2>
      <form className="post-form">
        <label htmlFor="title">
          <span>Title</span>
          <input
            id="title"
            type="text"
            placeholder="Hello world"
            onChange={handleChange}
            value={state.title}
          />
        </label>
        <label htmlFor="content">
          <span>Content</span>
          <textarea
            id="content"
            placeholder="Hello world"
            rows="5"
            onChange={handleChange}
            value={state.content}
          />
        </label>
      </form>
      <button
        type="button"
        disabled={state.isButtonDisabled}
        onClick={handleClick}
      >
        CREATE
      </button>
    </section>
  )
};

export default Console;
