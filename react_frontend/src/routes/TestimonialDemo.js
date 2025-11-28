import React from 'react';

// PUBLIC_INTERFACE
export default function TestimonialDemo() {
  const items = [
    { name: 'Ava Collins', quote: 'An elegant theme that elevates our UI.', role: 'Product Designer' },
    { name: 'Liam Hayes', quote: 'Fast to build and easy to maintain.', role: 'Engineer' },
  ];
  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Testimonial</h2>
        <p className="text-sm text-gray-600">Customer quotes with avatar.</p>
      </header>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((t) => (
          <figure key={t.name} className="card p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                {t.name.charAt(0)}
              </div>
              <figcaption>
                <div className="font-medium text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-600">{t.role}</div>
              </figcaption>
            </div>
            <blockquote className="mt-3 text-sm text-gray-700">“{t.quote}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
