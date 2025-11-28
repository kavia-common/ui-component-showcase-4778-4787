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
   * Fixed top navbar and simplified hero heading.
   * Preserves app-wide page gradient and navbar/footer gradient.
   */
  return (
    <div className="min-h-screen bg-app-gradient text-[var(--color-text)]">
      <Navbar />
      <main className="w-full" style={{ paddingTop: 'var(--nav-height, 64px)' }}>
        {/* Simplified Hero Section */}
        <header className="hero" role="region" aria-label="Hero Section">
          <div className="container-max">
            <div className="hero-card">
              <h1 className="text-center">
                UI Components <span className="highlight">Showcase</span>
              </h1>
            </div>
          </div>
        </header>

        {/* Routed content */}
        <section id="demos" className="container-max py-6">
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

          {/* Footer retains navbar gradient */}
          <footer className="mt-6 rounded-xl overflow-hidden" aria-label="Application footer">
            <div className="px-4 py-3 text-xs" style={{ background: 'var(--bg-navbar)', color: '#FFFFFF' }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span>
                  Environment: {process.env.REACT_APP_NODE_ENV || 'development'} · Port: {process.env.REACT_APP_PORT || '3000'}
                </span>
                <span className="opacity-90">© {new Date().getFullYear()} Components Showcase</span>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
