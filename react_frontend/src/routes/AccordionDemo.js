import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function AccordionDemo() {
  const [open, setOpen] = useState(0);
  const items = [
    { title: 'What is Tailwind CSS?', content: 'A utility-first CSS framework for rapid UI development.' },
    { title: 'What is the Ocean theme?', content: 'A professional palette with blue and amber accents.' },
    { title: 'Is this accessible?', content: 'Buttons are focusable and have ARIA attributes.' },
  ];

  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Accordion</h2>
        <p className="text-sm text-gray-600">Expand items to reveal content.</p>
      </header>

      <div className="space-y-3">
        {items.map((it, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="card">
              <button
                className="w-full flex items-center justify-between px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`sect-${idx}`}
                id={`btn-${idx}`}
                onClick={() => setOpen(isOpen ? -1 : idx)}
              >
                <span className="text-gray-900 font-medium">{it.title}</span>
                <span className="text-gray-500">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div
                  id={`sect-${idx}`}
                  role="region"
                  aria-labelledby={`btn-${idx}`}
                  className="px-4 pb-4 text-sm text-gray-700"
                >
                  {it.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
