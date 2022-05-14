import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

import useScrollSnap from 'react-use-scroll-snap';
import React, { useRef } from 'react'


const App = () => {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <div className="app">
      <Navbar />
      <div ref={scrollRef}>
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App