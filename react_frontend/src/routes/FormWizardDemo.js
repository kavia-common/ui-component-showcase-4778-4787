import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function FormWizardDemo() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', agree: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (step === 1 && !form.name.trim()) e.name = 'Name is required';
    if (step === 2 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (step === 3 && !form.agree) e.agree = 'Please agree to continue';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) setStep((s) => Math.min(3, s + 1));
  };
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Form Wizard</h2>
        <p className="text-sm text-gray-600">Three-step form with minimal validation.</p>
      </header>

      <div className="card p-4">
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className={`h-2 flex-1 rounded ${step >= n ? 'bg-blue-600' : 'bg-gray-200'}`} />
          ))}
        </div>

        {step === 1 && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-err' : undefined}
            />
            {errors.name && <p id="name-err" className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-err' : undefined}
            />
            {errors.email && <p id="email-err" className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="flex items-center gap-2">
            <input
              id="agree"
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300"
              aria-invalid={!!errors.agree}
              aria-describedby={errors.agree ? 'agree-err' : undefined}
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree to the terms
            </label>
            {errors.agree && <p id="agree-err" className="text-xs text-red-600">{errors.agree}</p>}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button className="btn-outline" onClick={prev} disabled={step === 1} aria-disabled={step === 1}>
            Back
          </button>
          {step < 3 ? (
            <button className="btn-primary" onClick={next}>
              Next
            </button>
          ) : (
            <button className="btn-secondary" onClick={() => alert('Submitted!')}>
              Submit
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
