import React from 'react'
import {v4 as uuidv4} from 'uuid';

const Posts = ({data}) => {
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
                <span className="header-datetime">{datetime}</span>
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
