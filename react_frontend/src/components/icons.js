import React from "react";

/**
 * Minimal inline SVG icon set for navbar utilities.
 * Icons follow a 20x20 viewBox, stroke=1.5 for consistency with the design notes.
 */

// PUBLIC_INTERFACE
export function IconBell({ className = "h-5 w-5" }) {
  /** Notification/Bell icon */
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.966 8.966 0 0118 9.75V9a6 6 0 10-12 0v.75a8.967 8.967 0 01-2.31 6.022c1.84.64 3.74 1.085 5.67 1.31m5.497 0a24.255 24.255 0 01-5.497 0m5.497 0a3 3 0 11-5.497 0"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function IconHelp({ className = "h-5 w-5" }) {
  /** Help/Question mark icon */
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.228 9c.549-1.165 1.778-2 3.272-2 1.933 0 3.5 1.343 3.5 3 0 1.657-1.567 3-3.5 3v1.5m.002 2.5h.005"
      />
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function IconCog({ className = "h-5 w-5" }) {
  /** Settings/Cog icon */
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.06c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.06 2.572c1.756.426 1.756 2.925 0 3.351a1.724 1.724 0 00-1.06 2.572c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.06c-.426 1.756-2.925 1.756-3.351 0a1.724 1.724 0 00-2.572-1.06c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 00-1.06-2.572c-1.756-.426-1.756-2.925 0-3.351.482-.117.88-.436 1.06-.872.94-1.543 3.706-.777 2.37-2.37A1.724 1.724 0 007.753 5.38a1.724 1.724 0 002.572-1.06z"
      />
      <circle cx="12" cy="12" r="3.25" strokeWidth="1.5" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function IconSearch({ className = "h-5 w-5" }) {
  /** Search icon */
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
      <path d="M20 20l-3.5-3.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function IconMenu({ className = "h-5 w-5" }) {
  /** Hamburger menu icon */
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export function IconClose({ className = "h-5 w-5" }) {
  /** Close icon */
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M6 6l12 12M6 18L18 6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
