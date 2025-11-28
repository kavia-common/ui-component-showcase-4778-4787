import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconBell, IconCog, IconHelp, IconMenu, IconClose } from "./icons";

/**
 * PUBLIC_INTERFACE
 * Navbar with brand on the left, primary links for Home (Hero), Accordion, Bento, Breadcrumbs,
 * and a "More" dropdown containing remaining demos. Preserves gradient background and
 * exposes --nav-height for main content offset. Mobile menu mirrors the same structure.
 */
const PRIMARY_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/accordion", label: "Accordion" },
  { to: "/bentomenu", label: "Bento" },
  { to: "/breadcrumbs", label: "Breadcrumbs" },
];

const MORE_LINKS = [
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
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const NAV_HEIGHT = 64;
  const location = useLocation();

  // Keep CSS var updated
  useEffect(() => {
    document.documentElement.style.setProperty("--nav-height", `${NAV_HEIGHT}px`);
  }, []);

  // Close flyouts on route change
  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Escape closes panels
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside to close "More"
  useEffect(() => {
    const onClick = (e) => {
      if (!moreRef.current) return;
      if (moreRef.current.contains(e.target)) return;
      setMoreOpen(false);
    };
    if (moreOpen) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [moreOpen]);

  // Is any of the MORE links active? Used for active highlight on trigger
  const isMoreActive = MORE_LINKS.some((l) =>
    l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to)
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

  // Desktop primary nav with More dropdown
  const DesktopPrimary = () => (
    <ul className="nav-links items-center">
      {PRIMARY_LINKS.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={!!l.end}
            className={({ isActive }) => ["nav-link", isActive ? "active" : ""].filter(Boolean).join(" ")}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {l.label}
          </NavLink>
        </li>
      ))}
      <li className="relative" ref={moreRef}>
        <button
          type="button"
          className={["nav-link", isMoreActive ? "active" : ""].join(" ")}
          aria-haspopup="menu"
          aria-expanded={moreOpen}
          onClick={() => setMoreOpen((v) => !v)}
        >
          More <span aria-hidden="true">▾</span>
        </button>
        {moreOpen && (
          <div
            role="menu"
            aria-label="More components"
            className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-100 overflow-hidden z-[1001]"
          >
            <ul className="py-1">
              {MORE_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      [
                        "block px-3 py-2 text-sm",
                        isActive ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50",
                      ].join(" ")
                    }
                    aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                    onClick={() => setMoreOpen(false)}
                    role="menuitem"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </ul>
  );

  // Mobile structure: Primary items, then "More" group as collapsible list
  const MobileMenu = () => (
    <div
      id="mobile-menu"
      className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${mobileOpen ? "max-h-[720px]" : "max-h-0"}`}
      aria-label="Mobile navigation"
      style={{ background: "var(--bg-navbar)" }}
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

          {/* Primary items */}
          <nav aria-label="Mobile primary" className="mt-2">
            <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
              {PRIMARY_LINKS.map((l) => (
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

              {/* More header (non-link) */}
              <li className="bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-600">More</li>

              {/* More items */}
              {MORE_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
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
  );

  return (
    <>
      <header role="banner" className="navbar" style={{ height: NAV_HEIGHT }}>
        <div className="container-max">
          <div className="nav-inner">
            {/* Brand cluster (left) */}
            <a href="/" className="brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" aria-label="Home">
              <span className="logo" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.6 4.8L19 8l-5.4 1.2L12 14l-1.6-4.8L5 8l5.4-1.2L12 2z" />
                </svg>
              </span>
              <span className="label">Components Showcase</span>
            </a>

            {/* Center search */}
            <Search />

            {/* Desktop/Tablet primary nav + More */}
            <nav className="hidden lg:block" aria-label="Primary">
              <DesktopPrimary />
            </nav>

            {/* Actions + hamburger */}
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
                  className="inline-grid place-items-center w-10 h-10 rounded-lg text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
                className="lg:hidden inline-grid place-items-center w-10 h-10 rounded-lg text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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

        {/* Mobile dropdown panel mirrors structure */}
        <MobileMenu />
      </header>
    </>
  );
}
