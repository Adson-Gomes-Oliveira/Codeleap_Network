import React from 'react';
import { useSelector } from 'react-redux';

import Console from '../components/Console';
import Posts from '../components/Posts';
import './style.homepage.css';

const Homepage = () => {
  const state = useSelector((state) => state.homepageReducer);

  return (
    <section className="homepage">
      {state.isPopupActive.switch && (
        <div className="popup">
          {state.isPopupActive.editMode && <Console editMode={true}/>}
          {/* {state.isPopupActive.deleteMode && ()}
          {state.isPopupActive.unvlidUserMode && ()} */}
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
