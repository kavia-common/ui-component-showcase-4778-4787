import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
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

// PUBLIC_INTERFACE
function App() {
  /**
   * Main app layout updated: gradient header with a responsive top navigation bar.
   * All routes remain accessible via the navbar with active link highlighting.
   */
  const links = [
    { to: '/', label: 'Overview' },
    { to: '/accordion', label: 'Accordion' },
    { to: '/bentomenu', label: 'Bento Menu' },
    { to: '/breadcrumbs', label: 'Breadcrumbs' },
    { to: '/carousel', label: 'Carousel' },
    { to: '/chatbot', label: 'Chatbot' },
    { to: '/form-wizard', label: 'Form Wizard' },
    { to: '/testimonial', label: 'Testimonial' },
    { to: '/toast', label: 'Toast' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const NavItems = ({ onClick }) => (
    <ul className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
      {links.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={l.to === '/'}
            onClick={() => onClick?.()}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
            }
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            <span className="h-2 w-2 rounded-full bg-gray-300 sm:hidden" aria-hidden="true" />
            <span>{l.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex flex-col">
      {/* Header + Top Navbar */}
      <header
        className="w-full bg-gradient-to-r from-blue-500/10 to-gray-50 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-200">
                <span className="text-blue-600 font-bold">UI</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Ocean Professional UI Showcase
                </h1>
                <p className="text-xs text-gray-500">Modern components with Tailwind CSS</p>
              </div>
            </div>

            {/* Right side info + mobile toggle */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-700">Primary #2563EB</span>
                <span className="px-2 py-1 text-xs rounded bg-amber-50 text-amber-700">Secondary #F59E0B</span>
              </div>
              <button
                className="sm:hidden ml-2 inline-flex items-center justify-center h-9 w-9 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden sm:block mt-3"
            aria-label="Component navigation"
          >
            <div className="card px-3 py-2">
              <NavItems />
            </div>
          </nav>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav
              id="mobile-menu"
              className="sm:hidden mt-3"
              aria-label="Component navigation"
            >
              <div className="card p-2">
                <NavItems onClick={() => setMobileOpen(false)} />
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Content area */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
