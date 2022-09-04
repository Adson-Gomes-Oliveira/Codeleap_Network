import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  );
}

export default App;
