import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home() {
  const demos = [
    { to: '/accordion', label: 'Accordion', desc: 'Expandable sections with smooth transitions.' },
    { to: '/bentomenu', label: 'Bento Menu', desc: 'Grid-based menu with hover effects.' },
    { to: '/breadcrumbs', label: 'Breadcrumbs', desc: 'Hierarchical navigation trail.' },
    { to: '/carousel', label: 'Carousel', desc: 'Slide through content with controls.' },
    { to: '/chatbot', label: 'Chatbot', desc: 'Simple chat interface with local state.' },
    { to: '/form-wizard', label: 'Form Wizard', desc: 'Multi-step form with validation.' },
    { to: '/testimonial', label: 'Testimonial', desc: 'Customer quotes with avatar.' },
    { to: '/toast', label: 'Toast', desc: 'Notifications and alerts.' },
  ];

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
        <p className="text-sm text-gray-600">
          Explore interactive UI components built with Tailwind CSS and the Ocean Professional theme.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((d) => (
          <Link to={d.to} key={d.to} className="card p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{d.label}</h3>
              <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700">Demo</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{d.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
