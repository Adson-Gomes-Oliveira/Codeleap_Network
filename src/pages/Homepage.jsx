import React from 'react';
import { useSelector } from 'react-redux';

import Console from '../components/Console';
import DeletePopup from '../components/DeletePopup';
import Posts from '../components/Posts';
import UnvalidPopup from '../components/UnvalidPopup';
import './style.homepage.css';

const Homepage = () => {
  const state = useSelector((state) => state.homepageReducer);

  return (
    <section className="homepage">
      {state.isPopupActive.switch && (
        <div className="popup">
          {state.isPopupActive.editMode && <Console editMode={true}/>}
          {state.isPopupActive.deleteMode && <DeletePopup />}
          {state.isPopupActive.unvalidUserMode && <UnvalidPopup />}
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
