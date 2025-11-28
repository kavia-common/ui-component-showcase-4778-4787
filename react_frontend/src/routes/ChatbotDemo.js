import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function ChatbotDemo() {
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hello! Ask me about the theme.' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const reply =
      text.toLowerCase().includes('color')
        ? "Primary is #2563EB, secondary is #F59E0B."
        : "I'm a local demo bot. Try asking about colors!";
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: reply }]);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section>
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Chatbot</h2>
        <p className="text-sm text-gray-600">Local state chatbot—no external APIs.</p>
      </header>
      <div className="card p-4">
        <div className="h-64 overflow-y-auto space-y-3 border border-gray-100 rounded-lg p-3 bg-gray-50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-3 py-2 rounded-lg ${
                m.role === 'bot' ? 'bg-white border border-gray-200' : 'bg-blue-600 text-white ml-auto'
              }`}
              aria-label={m.role === 'bot' ? 'Bot message' : 'User message'}
            >
              <p className="text-sm">{m.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ask about the theme colors..."
            aria-label="Message input"
          />
          <button className="btn-primary" onClick={handleSend} aria-label="Send message">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
