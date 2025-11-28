import React from 'react';

// PUBLIC_INTERFACE
export default function BentoMenuDemo() {
  const items = [
    { title: 'Dashboard', color: 'bg-blue-50 text-blue-700' },
    { title: 'Reports', color: 'bg-amber-50 text-amber-700' },
    { title: 'Customers', color: 'bg-green-50 text-green-700' },
    { title: 'Settings', color: 'bg-purple-50 text-purple-700' },
  ];
  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Bento Menu</h2>
        <p className="text-sm text-gray-600">Grid menu with hover lift effect.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className={`card p-4 transition-transform hover:-translate-y-0.5 ${it.color}`}
            role="button"
            tabIndex={0}
            aria-label={it.title}
          >
            <div className="text-sm font-medium">{it.title}</div>
            <p className="text-xs opacity-80 mt-1">Quick access</p>
          </div>
        ))}
      </div>
    </section>
  );
}
