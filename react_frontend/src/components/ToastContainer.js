import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ToastContainer renders a stack of toasts with ARIA live region.
 */
export default function ToastContainer({ toasts = [], onDismiss }) {
  return (
    <div
      className="fixed z-50 bottom-4 right-4 space-y-2"
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`card px-4 py-3 min-w-[240px] border-l-4 ${
            t.type === 'error'
              ? 'border-l-red-500'
              : t.type === 'success'
              ? 'border-l-emerald-500'
              : 'border-l-blue-500'
          } bg-white`}
          role="status"
        >
          <div className="flex items-start gap-3">
            <div
              className={`mt-1 h-2 w-2 rounded-full ${
                t.type === 'error'
                  ? 'bg-red-500'
                  : t.type === 'success'
                  ? 'bg-emerald-500'
                  : 'bg-blue-500'
              }`}
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{t.title}</p>
              {t.message && <p className="text-xs text-gray-600 mt-0.5">{t.message}</p>}
            </div>
            <button
              onClick={() => onDismiss?.(t.id)}
              className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
