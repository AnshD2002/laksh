import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Hi from './pages/hi';
import Confession from './pages/Confession.js';
import './pages/Confession.css'
import Memories from './pages/Memories';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleReplyClick = () => {
    navigate('/hi');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className='flex'>
        <div id="heart" className="mb-8 mr-8"></div>
        <div id="heart" className="mb-8"></div>
      </div>
      <h1 className="text-7xl font-bold text-blue-600 text-center">Happy Birthday <br/>Palak</h1>
      <button 
        className="p-5 text-4xl font-bold text-white bg-green-600 rounded-2xl mt-5"
        onClick={handleReplyClick}
      >
        Thankyou
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use Home component */}
        <Route path="/hi" element={<Hi />} /> {/* Correctly use element for Hi */}
        <Route path="/confession" element={<Confession />} /> {/* Correctly use element for Confession */}
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </Router>
  );
}

export default App;
