import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import AccordionDemo from './routes/AccordionDemo';
import BentoMenuDemo from './routes/BentoMenuDemo';
import BreadcrumbsDemo from './routes/BreadcrumbsDemo';
import CarouselDemo from './routes/CarouselDemo';
import ChatbotDemo from './routes/ChatbotDemo';
import FormWizardDemo from './routes/FormWizardDemo';
import TestimonialDemo from './routes/TestimonialDemo';
import ToastDemo from './routes/ToastDemo';
import Navbar from './components/Navbar';

// PUBLIC_INTERFACE
function App() {
  /**
   * Fixed top navbar with brand, nav, search, and utilities to match design notes.
   * Content area offsets by --nav-height to avoid overlap and preserve routing.
   */
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main className="w-full" style={{ paddingTop: 'calc(var(--nav-height, 68px) + 16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="card p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accordion" element={<AccordionDemo />} />
              <Route path="/bentomenu" element={<BentoMenuDemo />} />
              <Route path="/breadcrumbs" element={<BreadcrumbsDemo />} />
              <Route path="/carousel" element={<CarouselDemo />} />
              <Route path="/chatbot" element={<ChatbotDemo />} />
              <Route path="/form-wizard" element={<FormWizardDemo />} />
              <Route path="/testimonial" element={<TestimonialDemo />} />
              <Route path="/toast" element={<ToastDemo />} />
            </Routes>
          </div>
          <footer className="text-xs text-gray-500 mt-6">
            Environment: {process.env.REACT_APP_NODE_ENV || 'development'} · Port: {process.env.REACT_APP_PORT || '3000'}
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
