import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FontsApp from './components/FontsApp';

function App() {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  useEffect(() => {
      document.body.className = darkMode ? 'bg-dark text-light' : 'bg-white';
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);



  return (
    <div className="App">

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <FontsApp />

      <Footer />

    </div >
  );
}

export default App;
