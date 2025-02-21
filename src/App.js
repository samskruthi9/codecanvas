// Frontend: src/App.js (React with Tailwind CSS and React Router)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
