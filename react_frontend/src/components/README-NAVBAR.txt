Navbar implementation notes (simplified):
- Fixed header height: 64px (CSS var --nav-height).
- Content offset: main uses padding-top var(--nav-height).
- Two zones: Brand (left), Primary nav links (right).
- No search, utilities, or "More" dropdown.
- Mobile: hamburger toggles a collapsible menu with the same vertical list of links.
- Active nav link has an underline indicator bar (2px) via .nav-link.active.
- Colors and theme follow Ocean Professional; gradient background retained for header/footer.
