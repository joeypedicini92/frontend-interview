// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlashCardContainer from './FlashCardContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashCardContainer />} />
      </Routes>
    </Router>
  );
}

export default App;