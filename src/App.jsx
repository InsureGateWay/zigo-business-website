import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Industries from './components/Industries';
import WhyZigo from './components/WhyZigo';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import News from './components/News';  // Import News
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Industries />
      <WhyZigo />
      <Feedback />
      <News />  {/* Add News section */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;