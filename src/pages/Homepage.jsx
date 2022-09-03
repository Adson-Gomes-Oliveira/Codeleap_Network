import React from 'react';

import Console from '../components/Console';
import './style.homepage.css';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="homepage-body">
        <header><h1>CodeLeap Network</h1></header>
        <div className="homepage-elements">
          <Console />
       </div>
      </div>
    </section>
  );
}

export default Homepage;
