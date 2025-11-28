import React from 'react';
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
  /** Main app layout: gradient header and sidebar navigation with routed content area. */
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

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Header */}
      <header
        className="w-full bg-gradient-to-r from-blue-500/10 to-gray-50 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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
          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-700">Primary #2563EB</span>
            <span className="px-2 py-1 text-xs rounded bg-amber-50 text-amber-700">Secondary #F59E0B</span>
          </div>
        </div>
      </header>

      {/* Body with Sidebar + Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 px-4 sm:px-6 lg:px-8 py-6">
        <nav aria-label="Component navigation" className="md:sticky md:top-6 h-max">
          <div className="card p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Demos</h2>
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                    }
                    aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                  >
                    <span className="h-2 w-2 rounded-full bg-gray-300" aria-hidden="true" />
                    <span>{l.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="space-y-6" role="main">
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
          <footer className="text-xs text-gray-500">
            Environment: {process.env.REACT_APP_NODE_ENV || 'development'} · Port: {process.env.REACT_APP_PORT || '3000'}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
