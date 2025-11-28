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
   * Layout strictly aligned to screenshot:
   * - Fixed top navbar.
   * - Hero shows only the headline "UI Components Showcase" without extra chips/body/CTAs.
   * - No footer.
   */
  return (
    <div className="min-h-screen bg-app-gradient text-[var(--color-text)]">
      <Navbar />
      <main className="w-full" style={{ paddingTop: 'var(--nav-height, 64px)' }}>
        <header className="hero" role="region" aria-label="Hero Section">
          <div className="container-max">
            <div className="hero-card">
              <h1>
                UI Components <span className="highlight">Showcase</span>
              </h1>
            </div>
          </div>
        </header>

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
        </section>
      </main>
    </div>
  );
}

export default App;
