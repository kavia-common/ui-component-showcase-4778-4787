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
   * Fixed top navbar and hero layout matching the design notes.
   * Content area offsets by --nav-height to avoid overlap and preserve routing.
   */
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main className="w-full" style={{ paddingTop: 'calc(var(--nav-height, 64px))' }}>
        {/* Hero section as per design */}
        <header className="hero">
          <div className="container-max">
            <div className="chip mt-2" aria-label="Components Showcase tag">
              <span className="dot" aria-hidden="true" />
              <span className="text-xs font-semibold">Components Showcase</span>
            </div>

            <div className="hero-card">
              <h1>
                UI Components <span className="highlight">Showcase</span>
              </h1>
              <p>
                Explore modern, accessible React components styled with the Ocean Professional theme. Includes demos like
                Accordion, Button, Carousel, Checkbox, Toast, and more.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#demos">Explore Demos</a>
                <a className="btn btn-outline" href="#chatbot">Try Chatbot</a>
              </div>
            </div>
          </div>
        </header>

        {/* Routed content container */}
        <div id="demos" className="container-max py-6">
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
