import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconMenu, IconClose } from "./icons";

/**
 * PUBLIC_INTERFACE
 * Simplified Navbar: brand on the left; right side contains links to all component demos.
 * No search, utilities, or "More" dropdown. Mobile hamburger lists the same links.
 */
const NAV_LINKS = [
  { to: "/", label: "Hero Section", end: true },
  { to: "/accordion", label: "Accordion" },
  { to: "/bentomenu", label: "Bento" },
  { to: "/breadcrumbs", label: "Breadcrumbs" },
  { to: "/carousel", label: "Carousel" },
  { to: "/chatbot", label: "Chatbot" },
  { to: "/form-wizard", label: "Form Wizard" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/toast", label: "Toast" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const NAV_HEIGHT = 64;

  // Keep CSS var updated for main layout offset
  useEffect(() => {
    document.documentElement.style.setProperty("--nav-height", `${NAV_HEIGHT}px`);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const DesktopLinks = () => (
    <ul className="nav-links items-center">
      {NAV_LINKS.map((l) => (
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
    </ul>
  );

  const MobileMenu = () => (
    <div
      id="mobile-menu"
      className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${mobileOpen ? "max-h-[720px]" : "max-h-0"}`}
      aria-label="Mobile navigation"
      style={{ background: "var(--bg-navbar)" }}
    >
      <div className="container-max pt-3 pb-4">
        <div className="mobile-panel p-3">
          <nav aria-label="Mobile primary">
            <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden bg-white">
              {NAV_LINKS.map((l) => (
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
  );

  return (
    <header role="banner" className="navbar" style={{ height: NAV_HEIGHT }}>
      <div className="container-max">
        <div className="nav-inner" style={{ gridTemplateColumns: "auto 1fr auto" }}>
          {/* Brand (left) */}
          <a href="/" className="brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded" aria-label="Home">
            <span className="logo" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l1.6 4.8L19 8l-5.4 1.2L12 14l-1.6-4.8L5 8l5.4-1.2L12 2z" />
              </svg>
            </span>
            <span className="label">Components Showcase</span>
          </a>

          {/* Spacer */}
          <div />

          {/* Desktop links (right) */}
          <nav className="hidden lg:block" aria-label="Primary">
            <DesktopLinks />
          </nav>

          {/* Hamburger */}
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

      {/* Mobile dropdown */}
      <MobileMenu />
    </header>
  );
}
