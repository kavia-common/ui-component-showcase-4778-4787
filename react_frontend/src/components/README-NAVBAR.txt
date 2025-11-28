Navbar implementation notes:
- Fixed header height: 68px (CSS var --nav-height).
- Content offset: main has padding-top calc(var(--nav-height) + 16px).
- Three zones: Brand (left), Primary nav + Search (middle), Utilities (right).
- Mobile: hamburger toggles a collapsible menu with search and vertical links.
- Active nav link has an underline indicator bar (2px) using ::after.
- Utilities include bell/help/settings and a text avatar. Icons are in components/icons.js.
- Colors and theme follow Ocean Professional; backdrop blur used when supported.
