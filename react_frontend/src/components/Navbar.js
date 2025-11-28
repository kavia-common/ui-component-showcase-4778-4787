import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconBell, IconCog, IconHelp, IconMenu, IconClose, IconSearch } from "./icons";

/**
 * PUBLIC_INTERFACE
 * Navbar implements a fixed top navigation with brand, primary nav, optional search,
 * and right-aligned utilities. It is responsive with hamburger collapse on small screens.
 * The header height is exposed via CSS var --nav-height so the main content can offset accordingly.
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
  const NAV_HEIGHT = 68; // matches ~64–72px spec
  const MAX_W = "max-w-7xl"; // ~1280px container

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-height", `${NAV_HEIGHT}px`);
  }, []);

  useEffect(() => {
    // Close on route change (NavLink onClick calls setMobileOpen(false)), or Escape
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const NavItems = ({ onItemClick }) => (
    <ul className="flex items-center gap-5">
      {LINKS.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={!!l.end}
            onClick={() => onItemClick?.()}
            className={({ isActive }) =>
              [
                "inline-flex items-center px-1.5 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "text-gray-900 nav-pill-active"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
              ].join(" ")
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const Search = () => (
    <div className="relative hidden lg:inline-flex items-center">
      <IconSearch className="h-4 w-4 text-gray-400 absolute left-3 pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search components…"
        className="h-10 w-[280px] pl-9 pr-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 placeholder:text-gray-400
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        aria-label="Search components"
      />
    </div>
  );

  const IconButton = ({ label, children }) => (
    <button
      type="button"
      aria-label={label}
      className="inline-grid place-items-center h-10 w-10 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50
                 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {children}
    </button>
  );

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-[1000] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        style={{ height: NAV_HEIGHT }}
      >
        <div className={`${MAX_W} mx-auto h-full px-4 sm:px-6 lg:px-8`}>
          <div className="h-full flex items-center justify-between gap-4">
            {/* Left: Brand */}
            <a href="/" className="flex items-center min-h-[44px] -ml-1 pr-2 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-md">
              <div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-200">
                <span className="text-blue-600 font-bold text-sm">UI</span>
              </div>
              <div className="ml-3">
                <div className="text-base sm:text-lg font-semibold text-gray-900 leading-5">
                  Ocean UI Showcase
                </div>
                <div className="text-[11px] text-gray-500 leading-4">
                  Tailwind • Modern • Accessible
                </div>
              </div>
            </a>

            {/* Middle: Primary Nav + Search */}
            <div className="hidden md:flex items-center justify-start flex-1 min-w-0">
              <div className="flex items-center gap-8">
                <NavItems />
                <Search />
              </div>
            </div>

            {/* Right: Utilities + Mobile toggle */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden md:flex items-center">
                <IconButton label="Notifications">
                  <IconBell />
                </IconButton>
                <IconButton label="Help">
                  <IconHelp />
                </IconButton>
                <IconButton label="Settings">
                  <IconCog />
                </IconButton>
                <div className="mx-1 w-px h-6 bg-gray-200" aria-hidden="true" />
                {/* Avatar */}
                <button
                  type="button"
                  className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold
                             focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="User profile"
                >
                  A
                </button>
              </div>

              {/* Mobile search icon could be added; keeping minimal per notes */}
              <button
                className="md:hidden inline-grid place-items-center h-10 w-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50
                           focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${mobileOpen ? "max-h-[480px]" : "max-h-0"}`}
          aria-label="Mobile component navigation"
        >
          <div className="px-4 pb-3">
            <div className="mt-3">
              <div className="relative mb-2">
                <IconSearch className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components…"
                  className="h-10 w-full pl-9 pr-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 placeholder:text-gray-400
                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  aria-label="Search components"
                />
              </div>
              <nav className="rounded-xl border border-gray-200 bg-white">
                <ul className="divide-y divide-gray-200">
                  {LINKS.map((l) => (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        end={!!l.end}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            "flex items-center justify-between px-3 py-3 text-sm",
                            isActive ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-50",
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
