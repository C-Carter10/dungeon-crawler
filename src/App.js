import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StartPage } from './pages/StartPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
