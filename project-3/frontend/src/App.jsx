import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style/app.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
