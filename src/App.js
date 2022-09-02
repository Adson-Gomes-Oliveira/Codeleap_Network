import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/home' element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
