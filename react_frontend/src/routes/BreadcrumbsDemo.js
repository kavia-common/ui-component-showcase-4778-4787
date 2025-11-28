import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function BreadcrumbsDemo() {
  const [crumbs, setCrumbs] = useState(['Home', 'Library', 'Data']);
  const removeLast = () => setCrumbs((c) => (c.length > 1 ? c.slice(0, -1) : c));
  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Breadcrumbs</h2>
          <p className="text-sm text-gray-600">Hierarchical navigation trail.</p>
        </div>
        <button className="btn-outline" onClick={removeLast} aria-label="Remove last crumb">
          Pop
        </button>
      </header>

      <nav className="card p-4" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {crumbs.map((c, i) => (
            <li key={c} className="flex items-center gap-2">
              <span className={i === crumbs.length - 1 ? 'font-medium text-gray-900' : 'text-gray-600'}>
                {c}
              </span>
              {i < crumbs.length - 1 && <span className="text-gray-400">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
