import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../actions/index';

const Console = ({editMode}) => {
  const dispatch = useDispatch();
  const stateHomepage = useSelector((state) => state.homepageReducer);
  const stateUser = useSelector((state) => state.signUpReducer);

  const { title, content, isButtonDisabled } = stateHomepage;
  const { user } = stateUser;

  useEffect(() => {
    if (isButtonDisabled === true
      && (title.length > 0 && content.length > 0)) {
        dispatch(actions.toggleButton(false));
      }
    if (isButtonDisabled === false
      && (title.length < 1 || content.length < 1)) {
        dispatch(actions.toggleButton(true));
      }
  }, [title, content, dispatch, isButtonDisabled]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const postInputState = {
      ...stateHomepage,
      [id]: value,
    }

    dispatch(actions.postAction.storePostInputs(postInputState));
  }
  const handleClick = () => {
    const now = new Date();

    const postInfos = {
      postData: {
        title,
        content,
      },
      datetime: now,
      username: user,
    };

    dispatch(actions.postAction.createPost(postInfos));
  };

  return (
    <section className={editMode ? "console-edit" : "console"}>
      <h2>{editMode ? "Edit Item" : "What's on your mind?"}</h2>
      <form className="post-form">
        <label htmlFor="title">
          <span>Title</span>
          <input
            id="title"
            type="text"
            placeholder="Hello world"
            onChange={handleChange}
            value={stateHomepage.title}
          />
        </label>
        <label htmlFor="content">
          <span>Content</span>
          <textarea
            id="content"
            placeholder="Hello world"
            rows="5"
            onChange={handleChange}
            value={stateHomepage.content}
          />
        </label>
      </form>
      <button
        type="button"
        disabled={stateHomepage.isButtonDisabled}
        onClick={handleClick}
      >
        {editMode ? "SAVE" : "CREATE"}
      </button>
    </section>
  )
};

export default Console;
