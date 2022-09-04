import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions';

const DeletePopup = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(actions.postAction.togglePopup(null, false, 0));
  }

  return(
    <div class="unvalid-user-alert">
      <span>Invalid Edit</span>
      <span>You can only edit your own posts</span>
      <button type="button" onClick={handleClose}>CLOSE</button>
    </div>
  )
}

export default DeletePopup;
