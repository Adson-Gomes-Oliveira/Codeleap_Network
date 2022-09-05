import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import actions from '../actions';
import Console from '../components/Console';
import DeletePopup from '../components/DeletePopup';
import Posts from '../components/Posts';
import './style.homepage.css';

const Homepage = () => {
  const state = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();

  const { user } = stateUser;

  const TIME_TO_UPDATE_POSTS = 1000 * 60 * 5; // Every five minutes the posts update

  const updatePosts = useCallback(() => { //Timer to update posts
    return setInterval(() => {
      dispatch(actions.postAction.getPost());
    }, TIME_TO_UPDATE_POSTS);
  }, [dispatch, TIME_TO_UPDATE_POSTS]);

  useEffect(() => { // Get first time and Update posts
    dispatch(actions.postAction.getPost());
    const timerToUpdate = updatePosts();

    return () => {
      clearInterval(timerToUpdate);
    }
  }, [dispatch, updatePosts]);

  const checkUser = useCallback(() => user.length < 1 && navigate('/'), [user.length, navigate]); // Checking if any user exists
  useEffect(() => { checkUser() }, [checkUser]);

  return (
    <section className="homepage">
      {state.isPopupActive.switch && (
        <div className="popup">
          {state.isPopupActive.editMode && <Console editMode={true}/>}
          {state.isPopupActive.deleteMode && <DeletePopup />}
        </div>
      )}
      <div className="homepage-body">
        <header><h1>CodeLeap Network</h1></header>
        <div className="homepage-elements">
          <Console />
          <Posts data={state.post} />
       </div>
      </div>
    </section>
  );
}

export default Homepage;
