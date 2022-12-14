import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

import actions from '../actions';
import './style.post.css';

const INTERVAL_TO_UPDATE = 1000 * 60 * 1;

const Posts = ({data}) => {
  const [ timeNow, setTimeNow ] = useState(new Date());
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signUpReducer);

  const { user } = state;

  const postTime = (datetime) => { // Function for calculate time on posts
    const now = moment(timeNow);
    const past = moment(datetime);
    const duration = moment.duration(now.diff(past));
    const totalDurationSeconds = duration.asMinutes() < 1;
    const totalDurationHours = duration.asHours() >= 1 && duration.asHours() <= 24;
    const totalDurationDays = duration.asDays() >= 1 && duration.asDays() <= 31;
    const totalDurationMonths = duration.asMonths() >= 1 && duration.asMonths() <= 12;
    const totalDurationYears = duration.asYears() >= 1;

    if (totalDurationSeconds) return 'Less than one minute';
    if (totalDurationHours) return `${Math.round(duration.asHours())} hour(s) ago`;
    if (totalDurationDays) return `${Math.round(duration.asDays())} day(s) ago`;
    if (totalDurationMonths) return `${Math.round(duration.asMonths())} month(s) ago`;
    if (totalDurationYears) return `${Math.round(duration.asYears())} year(s) ago`;

    return `${Math.round(duration.asMinutes())} minute(s) ago`;
  }

  useEffect(() => { // useEffect for update time on posts
    const interval = setInterval(() => {
      setTimeNow(new Date());
    }, INTERVAL_TO_UPDATE);

    return () => {
      clearInterval(interval);
    }
  }, [])

  const handleEdit = (id, title, content) => {
    const postUser = data.find((post) => post.id === id).username;
    const activeUser = user;

    if (postUser === activeUser) {
      dispatch(actions.togglePopup('editMode', true, id));
      dispatch(actions.postAction.storePostInputs({ title, content }));
    }

    if (postUser !== activeUser) {
      dispatch(actions.togglePopup('unvalidUserMode', true));
    }
  };

  const handleDelete = (id) => {
    const postUser = data.find((post) => post.id === id).username;
    const activeUser = user;

    if (postUser === activeUser) {
      dispatch(actions.togglePopup('deleteMode', true, id));
    }

    if (postUser !== activeUser) {
      dispatch(actions.togglePopup('unvalidUserMode', true));
    }
  }

  const dataSorted = data.map((post) => {
    const newPost = { ...post, created_datetime: new Date(post.created_datetime) }
    return newPost;
  }).sort((a, b) => b.created_datetime - a.created_datetime);
  
  return(
    <section className="post-section">
      {dataSorted.map((post) => {
        const { id, title, content, created_datetime: datetime, username } = post;

        return(
          <div key={uuidv4()} className="post">
            <div className="post-header">
              <h2>{title}</h2>
              { username === user && (
                <div className="header-icons">
                <button type="button" onClick={() => handleDelete(id)}>
                  <span className="material-icons-outlined delete-icon">
                    delete_forever
                  </span>
                </button>
  
                <button type="button" onClick={() => handleEdit(id, title, content)}>
                  <span className="material-icons-outlined edit-icon">
                    edit
                  </span>
                </button>
              </div>
              )}
            </div>

            <div className="post-content">
              <div className="content-header">
                <span className="header-username">{`@${username}`}</span>
                {datetime !== 0 && (
                  <span className="header-datetime">{`${postTime(datetime)}`}</span>
                )}
              </div>

              <div className="content-text">
                <p>{content}</p>
              </div>
            </div>
          </div>
        ); 
      })}
    </section>
  );
}

export default Posts;
