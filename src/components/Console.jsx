import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../actions/index';
import './style.console.css';

const Console = ({editMode}) => {
  const dispatch = useDispatch();
  const stateHomepage = useSelector((state) => state.homepageReducer);
  const stateUser = useSelector((state) => state.signUpReducer);

  const { title, content, isButtonDisabled, postEdit } = stateHomepage;
  const { user } = stateUser;

  useEffect(() => { // Activate or deactivate button
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
  };

  const handleCreate = () => {
    const postInfos = {
      title,
      content,
      username: user,
    };

    dispatch(actions.postAction.createPost(postInfos));
  };

  const handleEdit = () => {
    const now = new Date();

    const postInfos = {
      postData: {
        id: postEdit,
        title,
        content,
      },
      datetime: now,
      username: user,
    };

    dispatch(actions.postAction.editPost(postInfos));
    dispatch(actions.postAction.storePostInputs({ title: '', content: '' }))
  };

  const handleClose = () => {
    dispatch(actions.togglePopup(null, false, 0));
  };

  return (
    <section className={editMode ? "console-edit" : "console"}>
      <div className="console-header">
        <h2>{editMode ? "Edit Item" : "What's on your mind?"}</h2>
        {editMode && (
          <button type="button" onClick={handleClose}>
            <span className="material-icons-outlined">
              close
            </span>
          </button>
        )}
      </div>
      <form className="post-form">
        <label htmlFor="title">
          <span>Title</span>
          <input
            id="title"
            data-testid="title-box"
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
            data-testid="content-box"
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
        onClick={editMode ? handleEdit : handleCreate}
      >
        {editMode ? "SAVE" : "CREATE"}
      </button>
    </section>
  )
};

export default Console;
