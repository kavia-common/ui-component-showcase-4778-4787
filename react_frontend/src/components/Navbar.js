import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconBell, IconCog, IconHelp, IconMenu, IconClose, IconSearch } from "./icons";

/**
 * PUBLIC_INTERFACE
 * Navbar implements the showcase design: solid purple bar, grid inner layout with brand, centered search,
 * right-aligned nav links, theme switch, and CTA. Mobile collapses to hamburger.
 * Exposes --nav-height for main content offset.
 */
const LINKS = [
  { to: "/", label: "Overview", end: true },
  { to: "/accordion", label: "Accordion" },
  { to: "/bentomenu", label: "Bento Menu" },
  { to: "/breadcrumbs", label: "Breadcrumbs" },
  { to: "/carousel", label: "Carousel" },
  { to: "/chatbot", label: "Chatbot" },
  { to: "/form-wizard", label: "Form Wizard" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/toast", label: "Toast" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [themeOn, setThemeOn] = useState(false);
  const NAV_HEIGHT = 64;

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-height", `${NAV_HEIGHT}px`);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const NavItems = ({ onItemClick }) => (
    <ul className="nav-links">
      {LINKS.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={!!l.end}
            onClick={() => onItemClick?.()}
            className={({ isActive }) => ["nav-link", isActive ? "active" : ""].filter(Boolean).join(" ")}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const Search = () => (
    <div className="hidden md:block search" aria-hidden={false}>
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
        <path d="M20 20l-3.5-3.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        aria-label="Search components"
      />
    </div>
  );

  return (
    <>
      <header role="banner" className="navbar" style={{ height: NAV_HEIGHT }}>
        <div className="container-max">
          <div className="nav-inner">
            {/* Brand cluster */}
            <a href="/" className="brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded">
              <span className="logo" aria-hidden="true">
                {/* simple sparkle/asterisk */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.6 4.8L19 8l-5.4 1.2L12 14l-1.6-4.8L5 8l5.4-1.2L12 2z" />
                </svg>
              </span>
              <span className="label">Components Showcase</span>
            </a>

            {/* Center search */}
            <Search />

            {/* Right-center nav links (desktop/tablet) */}
            <nav className="hidden lg:block" aria-label="Primary">
              <NavItems />
            </nav>

            {/* Actions: theme switch + CTA + utilities + hamburger */}
            <div className="nav-actions">
              <button
                className={`theme-switch ${themeOn ? "on" : ""}`}
                onClick={() => setThemeOn((v) => !v)}
                aria-label="Toggle dark mode"
              >
                <span className="knob" />
              </button>

              <a href="/" className="cta-dark">Docs</a>

              <div className="hidden md:flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Notifications"
                  className="inline-grid place-items-center w-10 h-10 rounded-lg text-white/90 hover:bg-white/10"
                >
                  <IconBell className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Help"
                  className="inline-grid place-items-center w-10 h-10 rounded-lg text-white/90 hover:bg-white/10"
                >
                  <IconHelp className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Settings"
                  className="inline-grid place-items-center w-10 h-10 rounded-lg text-white/90 hover:bg-white/10"
                >
                  <IconCog className="h-5 w-5" />
                </button>
              </div>

              <button
                className="lg:hidden inline-grid place-items-center w-10 h-10 rounded-lg text-white hover:bg-white/10"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${mobileOpen ? "max-h-[520px]" : "max-h-0"}`}
          aria-label="Mobile navigation"
        >
          <div className="container-max pt-3 pb-4">
            <div className="mobile-panel p-3">
              <div className="mb-2">
                <div className="search" style={{ width: "100%", height: 36 }}>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
                    <path d="M20 20l-3.5-3.5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    aria-label="Search components"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <nav aria-label="Mobile primary" className="mt-2">
                <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
                  {LINKS.map((l) => (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        end={!!l.end}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            "flex items-center justify-between px-4 py-3 text-sm",
                            isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50",
                          ].join(" ")
                        }
                        aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                      >
                        <span>{l.label}</span>
                        <span className="text-gray-400" aria-hidden="true">›</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
