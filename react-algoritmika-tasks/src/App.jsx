import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Examples from './components/Examples';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </div>
  );
}

export default App;
