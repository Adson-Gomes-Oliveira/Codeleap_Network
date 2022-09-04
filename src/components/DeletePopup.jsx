import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../actions';

const DeletePopup = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homepageReducer);

  const { postDelete } = state;

  const handleClose = () => {
    dispatch(actions.postAction.togglePopup(null, false, 0));
  }

  const handleDelete = () => {
    dispatch(actions.postAction.deletePost(postDelete));
    dispatch(actions.postAction.togglePopup(null, false, 0));
  }

  return(
    <div className="delete-post-alert">
      <span>DELETE POST</span>
      <span>Are you sure you want to delete this item?</span>
      <div className="alert-buttons">
        <button type="button" onClick={handleDelete}>DELETE</button>
        <button type="button" onClick={handleClose}>CLOSE</button>
      </div>
    </div>
  )
}

export default DeletePopup;
