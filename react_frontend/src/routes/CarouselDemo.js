import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function CarouselDemo() {
  const slides = [
    { title: 'Ocean', color: 'bg-blue-100 text-blue-800' },
    { title: 'Amber', color: 'bg-amber-100 text-amber-800' },
    { title: 'Slate', color: 'bg-slate-100 text-slate-800' },
  ];
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Carousel</h2>
        <p className="text-sm text-gray-600">Slide through content.</p>
      </header>
      <div className="card p-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-100">
          <div className={`h-full w-full flex items-center justify-center ${slides[idx].color}`}>
            <span className="text-xl font-semibold">{slides[idx].title}</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={prev}
              className="btn-outline bg-white/80 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="btn-outline bg-white/80 backdrop-blur-sm"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
