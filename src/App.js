import React from 'react';

import { Contact, Resume, Experience, Certifications, About, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Experience />
      <Certifications />
      <div className="gradient__bg">
      <Resume />
      </div>
      <Contact />
    </div>
  )
}

export default App