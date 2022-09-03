import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

const INTERVAL_TO_UPDATE = 1000 * 60 * 1;

const Posts = ({data}) => {
  const [ timeNow, setTimeNow ] = useState(new Date());

  const postTime = (datetime) => {
    const now = moment(timeNow);
    const past = moment(datetime);
    const duration = moment.duration(now.diff(past));
    const totalDuration = duration.asMinutes() < 0;

    if (totalDuration) return 0

    return duration.asMinutes();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date());
    }, INTERVAL_TO_UPDATE);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return(
    <section className="post-section">
      {data.map((post) => {
        const { title, content, datetime, username } = post;

        return(
          <div key={uuidv4()} className="post">
            <div className="post-header">
              <h2>{title}</h2>
              <div className="header-icons">
                <button type="button">
                  <span className="material-icons-outlined delete-icon">
                    delete_forever
                  </span>
                </button>
  
                <button type="button">
                  <span className="material-icons-outlined edit-icon">
                    edit
                  </span>
                </button>
              </div>
            </div>

            <div className="post-content">
              <div className="content-header">
                <span className="header-username">{`@${username}`}</span>
                <span className="header-datetime">{`${Math.round(postTime(datetime))} minutes ago`}</span>
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
