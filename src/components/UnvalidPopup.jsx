import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions';
import './style.popup.css';

const UnvalidPopup = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(actions.togglePopup(null, false, 0));
  }

  return(
    <div class="unvalid-user-alert">
      <span>INVALID EDIT</span>
      <span>You can only edit your own posts</span>
      <button type="button" onClick={handleClose}>CLOSE</button>
    </div>
  )
}

export default UnvalidPopup;
