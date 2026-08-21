import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ProductsShowcase from './components/ProductsShowcase';
import Industries from './components/Industries';
import WhyZigo from './components/WhyZigo';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import News from './components/News';
import ServicesPage from './components/ServicesPage';
import DataServices from './components/DataServices';
import AIServices from './components/AIServices';
import InfrastructureServices from './components/InfrastructureServices';
import ApplicationsServices from './components/ApplicationsServices';
import PlatformsServices from './components/PlatformsServices';
import ITConsulting from './components/ITConsulting';
// Product imports
import DataPlatforms from './components/DataPlatforms';
import AISolutions from './components/AISolutions';
import CloudProducts from './components/CloudProducts';
import SecuritySuite from './components/SecuritySuite';
import AnalyticsTools from './components/AnalyticsTools';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot'; // Import ChatBot

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProductsShowcase />
      <Industries />
      <WhyZigo />
      <News />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/data-services" element={<DataServices />} />
            <Route path="/services/ai-services" element={<AIServices />} />
            <Route path="/services/infrastructure-services" element={<InfrastructureServices />} />
            <Route path="/services/applications-services" element={<ApplicationsServices />} />
            <Route path="/services/platforms-services" element={<PlatformsServices />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            {/* Product Routes */}
            <Route path="/products/data-platforms" element={<DataPlatforms />} />
            <Route path="/products/ai-solutions" element={<AISolutions />} />
            <Route path="/products/cloud-products" element={<CloudProducts />} />
            <Route path="/products/security-suite" element={<SecuritySuite />} />
            <Route path="/products/analytics-tools" element={<AnalyticsTools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        {/* Add ChatBot - it will appear on all pages */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
