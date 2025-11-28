import React, { useMemo, useState } from 'react';
import ToastContainer from '../components/ToastContainer';

// PUBLIC_INTERFACE
export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);
  const addToast = (type = 'info') => {
    const id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    setToasts((t) => [
      ...t,
      {
        id,
        type,
        title: type === 'error' ? 'Error' : type === 'success' ? 'Success' : 'Info',
        message:
          type === 'error'
            ? 'Something went wrong.'
            : type === 'success'
            ? 'Action completed successfully.'
            : 'Heads up! Here is some information.',
      },
    ]);
    // Auto-dismiss after 3s
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };
  const onDismiss = (id) => setToasts((t) => t.filter((x) => x.id !== id));

  const actions = useMemo(
    () => [
      { label: 'Info', color: 'btn-outline', type: 'info' },
      { label: 'Success', color: 'btn-secondary', type: 'success' },
      { label: 'Error', color: 'btn-primary', type: 'error' },
    ],
    []
  );

  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Toast</h2>
        <p className="text-sm text-gray-600">Trigger notifications with different intents.</p>
      </header>
      <div className="card p-4">
        <div className="flex gap-2">
          {actions.map((a) => (
            <button key={a.type} className={a.color} onClick={() => addToast(a.type)}>
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer toasts={toasts} onDismiss={onDismiss} />
    </section>
  );
}
